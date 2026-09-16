const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

console.log('🎥 Converting NexaWeb Showcase Reel to Instagram-ready MP4...');
console.log('Using ffmpeg binary:', ffmpegPath);

const inputWebm = path.resolve(__dirname, '../public/marketing/nexaweb-showcase-reel.webm');
const outputMp4 = path.resolve(__dirname, '../public/marketing/nexaweb-showcase-reel.mp4');

if (!fs.existsSync(inputWebm)) {
  console.error('❌ Input file not found:', inputWebm);
  process.exit(1);
}

const inputSize = (fs.statSync(inputWebm).size / (1024 * 1024)).toFixed(2);
console.log(`Source WebM size: ${inputSize} MB`);

// Instagram Reel requirements: H.264, yuv420p, even dimensions, faststart
const args = [
  '-y',
  '-i', inputWebm,
  '-c:v', 'libx264',
  '-preset', 'slow',
  '-crf', '20',
  '-pix_fmt', 'yuv420p',
  '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
  '-r', '30',
  '-movflags', '+faststart',
  outputMp4
];

console.log('Executing ffmpeg command...');
const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });

if (result.status === 0 && fs.existsSync(outputMp4)) {
  const outputSize = (fs.statSync(outputMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 Success! Instagram-ready MP4 created at:\n${outputMp4} (${outputSize} MB)`);
} else {
  console.error('\n❌ Conversion failed with status code:', result.status);
  process.exit(result.status || 1);
}

