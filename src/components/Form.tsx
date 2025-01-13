"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "./ui/Input";
import LoadingState from './LoadingState';

const languages = [
  { id: "en", name: "English" },
  { id: "es", name: "Español" },
  { id: "fr", name: "Français" },
  { id: "pt", name: "Português" },
  { id: "it", name: "Italiano" },
  { id: "ja", name: "日本語" },
  { id: "th", name: "ภาษาไทย" },
  { id: "pl", name: "Polski" },
  { id: "de", name: "Deutsch" },
  { id: "ru", name: "Русский" },
  { id: "da", name: "Dansk" },
  { id: "nb", name: "Norsk bokmål" },
  { id: "nl", name: "Nederlands" },
  { id: "zh-CN", name: "简体中文" },
  { id: "zh-TW", name: "繁體中文" },
  { id: "tr", name: "Türkçe" },
  { id: "ar", name: "العربية" },
  { id: "ko", name: "한국어" },
];

const voices = [
  { id: "male", name: "Male Voice (Jack)", audioFile: "/assets/audio/jack.wav" },
  { id: "female", name: "Female Voice (Rose)", audioFile: "/assets/audio/rose.wav" },
];

const modes = [
  { id: "brainrot", name: "Brainrot Mode", description: "AI reads Words and presents the content in a fun, engaging way." },
  { id: "quiz", name: "Quiz Mode", description: "Generate interactive quizzes from your content." },
  { id: "raw", name: "Raw Mode", description: "Simple text-to-speech conversion." },
];

const backgroundVideos = [
  { id: "minecraft-2", name: "Minecraft Adventure", thumbnail: "/assets/images/minecraft-2_cover.png" },
  { id: "minecraft-3", name: "Minecraft Exploration", thumbnail: "/assets/images/minecraft-3_cover.png" },
  { id: "minecraft-4", name: "Minecraft Building", thumbnail: "/assets/images/minecraft-4_cover.png" },
  { id: "minecraft-5", name: "Minecraft Combat", thumbnail: "/assets/images/minecraft-5_cover.png" },
  { id: "minecraft-11", name: "Minecraft Parkour", thumbnail: "/assets/images/minecraft-11_cover.png" },
  { id: "minecraft-12", name: "Minecraft Racing", thumbnail: "/assets/images/minecraft-12_cover.png" },
  { id: "minecraft-13", name: "Minecraft Creative", thumbnail: "/assets/images/minecraft-13_cover.png" },
  { id: "gta-1", name: "GTA Racing", thumbnail: "/assets/images/gta-1_cover.png" },
  { id: "gta-2", name: "GTA Adventure", thumbnail: "/assets/images/gta-2_cover.png" },
  { id: "subway-1", name: "Subway Surfers Classic", thumbnail: "/assets/images/subway-1_cover.png" },
  { id: "subway-2", name: "Subway Surfers Speed", thumbnail: "/assets/images/subway-2_cover.png" },
  { id: "subway-11", name: "Subway Surfers Challenge", thumbnail: "/assets/images/subway-11_cover.png" },
];

const backgroundAudios = [
  { id: "none", name: "No Background Music", duration: "0:00" },
  { id: "Fluffing-a-Duck", name: "Fluffing a Duck", duration: "1:07" },
  { id: "Future-Bass", name: "Future Bass", duration: "2:05" },
  { id: "Monkeys-Spinning-Monkeys", name: "Monkeys Spinning Monkeys", duration: "2:05" },
  { id: "Travel", name: "Travel Light", duration: "3:34" },
  { id: "Wii-Music", name: "Wii Menu Music", duration: "1:27" },
];

export default function Form() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    mode: "brainrot",
    language: "en",
    voice: "male",
    backgroundVideo: "minecraft-2",
    backgroundAudio: "none",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const voiceAudioRef = useRef<HTMLAudioElement>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, text: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setFormData({ ...formData, text });
      };
      reader.readAsText(file);
    }
  };

  const toggleAudioPreview = (audioId: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingAudio === audioId) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingAudio(null);
    } else {
      if (audioId === "none") return;
      audio.src = `/assets/audio/${audioId}.mp3`;
      audio.play().catch(console.error);
      setPlayingAudio(audioId);
    }
  };

  const toggleVoicePreview = (voiceId: string) => {
    const audio = voiceAudioRef.current;
    if (!audio) return;

    if (playingVoice === voiceId) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingVoice(null);
    } else {
      const voice = voices.find(v => v.id === voiceId);
      if (!voice) return;
      audio.src = voice.audioFile;
      audio.play().catch(console.error);
      setPlayingVoice(voiceId);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 检查文本长度
      if (formData.text.length < 200 || formData.text.length > 2000) {
        throw new Error('Text length must be between 200 and 2000 characters');
      }

      const submitData = {
        ...formData,
        email: 'chenyiyang93@gmail.com'
      };

      console.log('Form data before submission:', submitData);
      console.log('Background audio value:', submitData.backgroundAudio);

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      console.log('Form submitted successfully!');
      setSuccess(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-gray-900 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Successfully Submitted!</h3>
        <p className="text-gray-400 mb-4">
          We have received your request and will process it shortly. 
          You will receive an email notification when your video is ready.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setFormData({
              text: "",
              mode: "brainrot",
              language: "en",
              voice: "male",
              backgroundVideo: "minecraft-2",
              backgroundAudio: "none",
            });
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Create Another
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-900">
      {loading && (
        <LoadingState 
          message="Processing your request..." 
          estimatedTime="30-60 minutes"
        />
      )}
      <audio ref={audioRef} onEnded={() => setPlayingAudio(null)} />
      <audio ref={voiceAudioRef} onEnded={() => setPlayingVoice(null)} />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左列：表单 */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 文本输入区域 */}
            <div>
              <div className="text-lg font-medium mb-2">
                <span className="text-white">Text field</span>
              </div>
              <div className="flex gap-2 mb-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-primary bg-white dark:bg-gray-800 border border-primary rounded-md hover:bg-primary/10"
                >
                  Typing Box
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Upload TXT File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
              <textarea
                id="text"
                value={formData.text}
                onChange={handleTextChange}
                placeholder="Type here or input anything you want to brainrot"
                className="w-full h-40 p-3 border rounded-md bg-gray-800 text-white border-gray-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                required
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Current character count: {formData.text.length}
                <span className="ml-2">The text length must be between 200 and 2000 characters.</span>
              </p>
            </div>

            {/* 模式选择 */}
            <div>
              <div className="text-lg font-medium mb-2">
                <span className="text-white">Select Mode</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: mode.id })}
                    className={`p-3 text-sm border rounded-md ${
                      formData.mode === mode.id
                        ? "border-blue-600 text-blue-600 bg-blue-600/20"
                        : "border-gray-600 text-white bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {modes.find((m) => m.id === formData.mode)?.description}
              </p>
            </div>

            {/* 语言选择 */}
            <div>
              <div className="text-lg font-medium mb-2">
                <span className="text-white">Select Language</span>
              </div>
              <select
                id="language"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full p-3 border rounded-md bg-gray-800 text-white border-gray-600"
              >
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 声音选择 */}
            <div>
              <div className="text-lg font-medium mb-2">
                <span className="text-white">Select Voice</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {voices.map((voice) => (
                  <button
                    key={voice.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, voice: voice.id })}
                    className={`flex items-center justify-between p-3 border rounded-lg ${
                      formData.voice === voice.id
                        ? "border-blue-600 text-blue-600 bg-blue-600/20"
                        : "border-gray-600 text-white bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                        {voice.id === "male" ? (
                          <span className="text-base">👨</span>
                        ) : (
                          <span className="text-base">👩</span>
                        )}
                      </div>
                      <span className="font-medium">{voice.name}</span>
                    </div>
                    <button
                      type="button"
                      className={`ml-2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 ${
                        playingVoice === voice.id ? "text-primary" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVoicePreview(voice.id);
                      }}
                    >
                      {playingVoice === voice.id ? "⏹️" : "▶️"}
                    </button>
                  </button>
                ))}
              </div>
            </div>

            {/* 背景视频选择 */}
            <div>
              <div className="text-lg font-medium mb-2">
                <span className="text-white">Select Background Video</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {backgroundVideos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, backgroundVideo: video.id })}
                    className={`relative w-full pb-[177.78%] rounded-lg overflow-hidden border-2 ${
                      formData.backgroundVideo === video.id
                        ? "border-blue-600 ring-2 ring-blue-600 ring-opacity-50"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={video.thumbnail}
                        alt={video.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2">
                        <span className="text-white text-sm truncate w-full text-left">
                          {video.name}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 背景音频选择 */}
            <div>
              <div className="text-lg font-medium mb-2">
                <span className="text-white">Select Background Audio</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {backgroundAudios.map((audio) => (
                  <button
                    key={audio.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, backgroundAudio: audio.id })}
                    className={`flex items-center p-3 border rounded-lg ${
                      formData.backgroundAudio === audio.id
                        ? "border-blue-600 text-blue-600 bg-blue-600/20"
                        : "border-gray-600 text-white bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                        {audio.id === "none" ? (
                          <span className="text-base">🚫</span>
                        ) : (
                          <span className="text-base">🎵</span>
                        )}
                      </div>
                      <div className="truncate">
                        <div className="font-medium truncate">{audio.name}</div>
                        {audio.id !== "none" && (
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {audio.duration}
                          </div>
                        )}
                      </div>
                    </div>
                    {audio.id !== "none" && (
                      <button
                        type="button"
                        className={`ml-2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 ${
                          playingAudio === audio.id ? "text-primary" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAudioPreview(audio.id);
                        }}
                      >
                        {playingAudio === audio.id ? "⏹️" : "▶️"}
                      </button>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 提交按钮 */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md border border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-colors"
              >
                Generate Video
              </button>
            </div>
          </form>
        </div>

        {/* 右列：预览 */}
        <div className="lg:w-1/2">
          <div className="sticky top-4 space-y-4">
            <div className="relative w-full pb-[177.78%] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              {formData.backgroundVideo && (
                <div className="absolute inset-0">
                  <img
                    src={`/assets/images/${formData.backgroundVideo}_cover.png`}
                    alt="Selected background"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-medium mb-2">Selected Options:</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-500 dark:text-gray-400">Mode:</span> {formData.mode}</li>
                <li><span className="text-gray-500 dark:text-gray-400">Language:</span> {languages.find(l => l.id === formData.language)?.name}</li>
                <li><span className="text-gray-500 dark:text-gray-400">Voice:</span> {voices.find(v => v.id === formData.voice)?.name}</li>
                <li><span className="text-gray-500 dark:text-gray-400">Background Video:</span> {backgroundVideos.find(v => v.id === formData.backgroundVideo)?.name}</li>
                <li><span className="text-gray-500 dark:text-gray-400">Background Audio:</span> {backgroundAudios.find(a => a.id === formData.backgroundAudio)?.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}