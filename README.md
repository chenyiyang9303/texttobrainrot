# TextToBrainrot

A web application that converts text into brainrot-style videos.

## Features

- Text to video conversion
- Multiple language support
- Voice selection
- Background video and audio options
- Easy download functionality

## Tech Stack

- Next.js
- TailwindCSS
- FFmpeg
- Node.js

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  ├── app/              # Next.js app router
  ├── components/       # React components
  │   └── ui/          # Reusable UI components
  └── lib/             # Utility functions and helpers
public/
  └── assets/          # Static assets
      ├── videos/      # Background videos
      ├── audio/       # Background audio files
      └── images/      # Images
```
