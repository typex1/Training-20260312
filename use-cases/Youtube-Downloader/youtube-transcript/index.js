import { YoutubeTranscript } from "youtube-transcript/dist/youtube-transcript.esm.js";
import fs from "fs";

const url = process.argv[2];
if (!url) {
  console.error("Usage: node index.js <youtube-url>");
  process.exit(1);
}

const videoId = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];
if (!videoId) {
  console.error("Invalid YouTube URL");
  process.exit(1);
}

try {
  const transcript = await YoutubeTranscript.fetchTranscript(videoId);
  const text = transcript.map((t) => t.text).join("\n");
  const filename = `transcript_${videoId}.txt`;
  fs.writeFileSync(filename, text);
  console.log(`Saved: ${filename}`);
} catch (err) {
  console.error("Failed to fetch transcript:", err.message);
  process.exit(1);
}
