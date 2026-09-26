/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HASSAN MD BOT - Dashboard & Control Panel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #080f14;
            --card-bg: #111c24;
            --accent-green: #25d366;
            --accent-blue: #0088cc;
            --text-main: #e9edef;
            --text-muted: #8696a0;
            --neon-glow: #00f2fe;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-main); padding: 20px; min-height: 100vh; }
        .container { max-width: 1100px; margin: 0 auto; background: rgba(17, 28, 36, 0.95); border-radius: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
        .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 25px; margin-bottom: 30px; }
        .header img { width: 120px; height: 120px; border-radius: 50%; border: 3px solid var(--neon-glow); box-shadow: 0 0 20px rgba(0,242,254,0.5); object-fit: cover; }
        .header h1 { font-size: 32px; color: #fff; margin-top: 15px; letter-spacing: 1.5px; }
        .header p { color: var(--text-muted); font-size: 14px; margin-top: 5px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .card { background: #16242f; padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); }
        .card h3 { color: var(--neon-glow); margin-bottom: 15px; font-size: 18px; display: flex; align-items: center; gap: 10px; }
        .btn { display: inline-block; width: 100%; padding: 12px; background: linear-gradient(135deg, #0088cc, #25d366); color: white; border: none; border-radius: 8px; font-weight: 600; text-align: center; text-decoration: none; cursor: pointer; transition: 0.3s; margin-top: 10px; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .status-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; background: rgba(37, 211, 102, 0.2); color: var(--accent-green); border: 1px solid var(--accent-green); }
        .input-box { width: 100%; padding: 10px; background: #0c141a; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff; margin-bottom: 10px; }
        footer { text-align: center; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: var(--text-muted); font-size: 13px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://files.catbox.moe/lyj69b.jpg" alt="HASSAN MD BOT DP">
            <h1>*_HASSAN MD BOT_*</h1>
            <p>Next-Gen Hybrid WhatsApp & Telegram Multi-Device Automation Engine</p>
        </div>

        <div class="grid">
            <div class="card">
                <h3><i class="fab fa-whatsapp"></i> WhatsApp Pairing</h3>
                <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">Enter your WhatsApp phone number with country code (e.g. 923001234567) to generate a pairing code.</p>
                <input type="text" id="waNumber" class="input-box" placeholder="e.g. 923001234567">
                <button class="btn" onclick="getPairingCode()"><i class="fas fa-key"></i> Get WhatsApp Pairing Code</button>
                <div id="pairResult" style="margin-top: 15px; font-family: 'Share Tech Mono', monospace; font-size: 20px; color: var(--neon-glow); text-align: center;"></div>
            </div>

            <div class="card">
                <h3><i class="fab fa-telegram"></i> Telegram Bot Link</h3>
                <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">Telegram Bot Service is active! Configure your Telegram Bot Token in environment or config file.</p>
                <div class="status-badge"><i class="fas fa-check-circle"></i> Service Ready</div>
                <a href="https://whatsapp.com/channel/0029Vb9A22MFi8xjC06TsV2M" target="_blank" class="btn" style="background: #25d366;"><i class="fab fa-whatsapp"></i> Join WhatsApp Channel</a>
            </div>

            <div class="card">
                <h3><i class="fas fa-server"></i> System Analytics</h3>
                <p><strong>Owner/Bot Name:</strong> *_HASSAN MD BOT_*</p>
                <p><strong>Loaded Commands:</strong> <span style="color:var(--neon-glow);">300+ Commands</span></p>
                <p><strong>Mode:</strong> Public Dual-Platform</p>
                <p><strong>Status:</strong> <span class="status-badge">ONLINE</span></p>
            </div>
        </div>

        <footer>
            <p>&copy; 2026 *_HASSAN MD BOT_*. All Rights Reserved. Powered by *_HASSAN MD BOT_* Framework.</p>
        </footer>
    </div>

    <script>
        async function getPairingCode() {
            const num = document.getElementById('waNumber').value.trim();
            if(!num) return alert('Please enter phone number!');
            document.getElementById('pairResult').innerText = "Generating Code...";
            try {
                const res = await fetch('/pair?number=' + num);
                const data = await res.json();
                if(data.code) {
                    document.getElementById('pairResult').innerText = "CODE: " + data.code;
                } else {
                    document.getElementById('pairResult').innerText = data.error || data.message || "Connected/Error";
                }
            } catch(e) {
                document.getElementById('pairResult').innerText = "Error requesting code";
            }
        }
    </script>
</body>
</html>
*/

// ============================================================================
// BACKEND ENGINE CODE FOR *_HASSAN MD BOT_* (WHATSAPP + TELEGRAM)
// ============================================================================

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
    delay
} = require("@whiskeysockets/baileys");
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const pino = require("pino");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// GLOBAL CONSTANTS FOR *_HASSAN MD BOT_*
const BOT_NAME = "*_HASSAN MD BOT_*";
const OWNER_NAME = "*_HASSAN MD BOT_*";
const DP_IMAGE = "https://files.catbox.moe/lyj69b.jpg";
const WA_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb9A22MFi8xjC06TsV2M";
const PREFIX = ".";

// TELEGRAM BOT CONFIGURATION (Optional token via env)
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || "";
let tgBot = null;
if (TELEGRAM_TOKEN) {
    tgBot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
    console.log(`[+] Telegram Engine initialized for ${BOT_NAME}`);
}

// ============================================================================
// 300+ COMMANDS DATABASE & DEFINITIONS MATRIX
// ============================================================================
const COMMANDS_DATABASE = {};

// Helper to register commands cleanly
function addCmd(name, category, desc, usage = "") {
    COMMANDS_DATABASE[name.toLowerCase()] = {
        name: name,
        category: category,
        description: desc,
        usage: usage || `${PREFIX}${name}`
    };
}

// 1. AI MODULES (30 Commands)
const aiCmds = [
    ["ai", "Ask general AI question"], ["chatgpt", "Chat with GPT-4 model"], ["gemini", "Google Gemini AI model query"],
    ["copilot", "Microsoft Copilot query"], ["deepseek", "DeepSeek AI reasoning engine"], ["claude", "Anthropic Claude AI chat"],
    ["llama3", "Meta Llama 3 AI execution"], ["grok", "xAI Grok AI interface"], ["qwen", "Alibaba Qwen model query"],
    ["mistral", "Mistral AI chat model"], ["dalle", "Generate image using AI"], ["midjourney", "Midjourney style image creation"],
    ["stablephoto", "Stable Diffusion image prompt"], ["imagine", "Generate creative AI images"], ["text2image", "Convert prompt to image"],
    ["bgremove", "Remove image background with AI"], ["ocr", "Extract text from image using AI"], ["rephrase", "Rewrite text professionally"], ["translate", "Translate text to any language"], ["grammar", "Fix grammar mistakes"],
    ["summarize", "Summarize long articles/text"], ["codefix", "Fix bugs in code snippets"], ["pythonai", "Generate Python code"], ["jsai", "Generate JavaScript code"], ["htmlai", "Generate HTML/CSS design"],
    ["explaincode", "Explain complex code simply"], ["mathsolver", "Solve math problems step by step"], ["aiessay", "Write structured essays"], ["voiceai", "Convert text to AI voice"], ["animeai", "Turn photo into anime style"]
];
aiCmds.forEach(c => addCmd(c[0], "AI & Machine Learning", c[1], `${PREFIX}${c[0]} [prompt/text]`));

// 2. DOWNLOADERS (35 Commands)
const dlCmds = [
    ["song", "Download MP3 audio from YouTube"], ["video", "Download MP4 video from YouTube"], ["ytmp3", "Convert YouTube link to MP3"],
    ["ytmp4", "Convert YouTube link to MP4"], ["play", "Search and play music"], ["tiktok", "Download TikTok video without watermark"],
    ["tikmp3", "Download TikTok audio track"], ["instagram", "Download Instagram Reels/Posts"], ["igstory", "Download Instagram Story"],
    ["fb", "Download Facebook HD videos"], ["fbreels", "Download Facebook Reels"], ["twitter", "Download Twitter/X video"],
    ["mediafire", "Download files from MediaFire"], ["gdrive", "Download files from Google Drive"], ["mega", "Download files from Mega.nz"],
    ["pinterest", "Download Pinterest images/videos"], ["threads", "Download Threads video"], ["soundcloud", "Download SoundCloud music"],
    ["spotify", "Download Spotify tracks"], ["apk", "Download Android APK files"], ["modapk", "Find modded APK links"],
    ["gitclone", "Clone GitHub repository zip"], ["capcut", "Download CapCut templates/video"], ["snackvideo", "Download SnackVideo clips"],
    ["likee", "Download Likee videos"], ["rumble", "Download Rumble video"], ["vimeo", "Download Vimeo video"],
    ["dailymotion", "Download Dailymotion video"], ["xvideos", "Search and download media"], ["xsearch", "Search video database"],
    ["ytdl", "Universal video downloader"], ["streamdl", "Stream video directly"], ["ringtone", "Download ringtones"],
    ["wallpaper", "Download HD wallpapers"], ["stickerpack", "Download full sticker packs"]
];
dlCmds.forEach(c => addCmd(c[0], "Downloader Modules", c[1], `${PREFIX}${c[0]} [link/search]`));

// 3. MEDIA & STICKER TOOLS (30 Commands)
const mediaCmds = [
    ["sticker", "Convert image/video to sticker"], ["s", "Short command for sticker"], ["take", "Change sticker pack name"],
    ["toimg", "Convert sticker to image"], ["tomp3", "Convert video to MP3 audio"], ["tovideo", "Convert GIF/Sticker to video"],
    ["togif", "Convert video to GIF"], ["blur", "Blur image background"], ["circle", "Crop image into circle"],
    ["invert", "Invert image colors"], ["grayscale", "Make image black and white"], ["resize", "Resize image dimensions"],
    ["compress", "Reduce image/video file size"], ["rotate", "Rotate image angles"], ["flip", "Flip image horizontally/vertically"],
    ["brighten", "Increase image brightness"], ["contrast", "Adjust image contrast"], ["meme", "Create custom text meme"],
    ["carbon", "Generate code screenshot"], ["quote", "Create quote picture"], ["emojimix", "Combine two emojis into sticker"],
    ["attp", "Animated text to sticker"], ["ttp", "Plain text to sticker"], ["filter", "Apply custom photo filters"],
    ["vfx", "Apply video effects"], ["slowmo", "Make video slow motion"], ["fastfwd", "Speed up video"],
    ["reverse", "Reverse audio or video"], ["pitch", "Adjust audio pitch"], ["bass", "Boost audio bass"]
];
mediaCmds.forEach(c => addCmd(c[0], "Media & Sticker Converter", c[1], `${PREFIX}${c[0]} [reply to media]`));

// 4. GROUP MANAGEMENT (40 Commands)
const groupCmds = [
    ["mute", "Mute group (Admins only)"], ["unmute", "Unmute group"], ["kick", "Remove user from group"],
    ["add", "Add user to group"], ["promote", "Promote member to admin"], ["demote", "Demote admin to member"],
    ["tagall", "Mention all group members"], ["hidetag", "Tag everyone silently"], ["groupinfo", "Show group settings & info"],
    ["linkgroup", "Get group invite link"], ["revoke", "Reset group invite link"], ["setname", "Change group title"],
    ["setdesc", "Change group description"], ["seticon", "Change group icon/dp"], ["welcome", "Toggle welcome message"],
    ["goodbye", "Toggle goodbye message"], ["antiblink", "Block invite links"], ["antivirtex", "Block crash text/virtex"],["antidelete", "Save deleted messages"], ["antiviewonce", "Auto-save view once media"], ["warn", "Give warning to user"],
    ["unwarn", "Remove warning from user"], ["warnings", "Check user warning status"], ["clearwarns", "Reset user warnings"],
    ["lock", "Lock group settings"], ["unlock", "Unlock group settings"], ["poll", "Create group poll"],
    ["pin", "Pin message in chat"], ["unpin", "Unpin message"], ["tagadmins", "Tag all group admins"],
    ["grouppromoteall", "Promote everyone"], ["groupdemoteall", "Demote everyone"], ["leave", "Make bot leave group"],
    ["ephemeral", "Toggle disappearing messages"], ["approval", "Toggle join approval mode"], ["requests", "Check pending join requests"],
    ["acceptall", "Accept all join requests"], ["rejectall", "Reject all join requests"], ["groupstat", "Group activity stats"], ["resetgroup", "Clear group data"]
];
groupCmds.forEach(c => addCmd(c[0], "Group Moderation", c[1], `${PREFIX}${c[0]}`));

// 5. FUN, GAMES & ENTERTAINMENT (50 Commands)
const funCmds = [
    ["roast", "Roast tagged user"], ["shayari", "Get Urdu/Hindi Shayari"], ["joke", "Get funny jokes"],
    ["fact", "Get random interesting fact"], ["truth", "Truth or Dare - Truth"], ["dare", "Truth or Dare - Dare"],
    ["lovetest", "Calculate love percentage"], ["stupidtest", "Calculate stupidity score"], ["gaytest", "Fun gay score calculator"],
    ["handsome", "Check handsomeness rating"], ["beauty", "Check beauty score"], ["iqtest", "Measure IQ level"],
    ["compatibility", "Check user match rating"], ["ship", "Ship two random members"], ["chachachachi", "Fun game"],
    ["bhaibehan", "Fun sibling test"], ["pickupline", "Get romantic pickup lines"], ["flirt", "Send flirtatious text"],
    ["insult", "Insult tagged user"], ["advice", "Get random life advice"], ["riddle", "Solve fun riddles"],["quiz", "Start trivia quiz"], ["tictactoe", "Play TicTacToe game"], ["chess", "Start chess game"],
    ["connect4", "Play Connect Four"], ["wordle", "Play Wordle word game"], ["coinflip", "Flip a virtual coin"],
    ["rolldice", "Roll 6-sided dice"], ["slot", "Play casino slot machine"], ["hangman", "Play Hangman game"],
    ["mathquiz", "Quick math challenge"], ["spinwheel", "Spin fortune wheel"], ["truthordare", "Random truth/dare"],
    ["character", "Evaluate user personality"], ["compatability", "Check horoscope match"], ["horoscope", "Get daily horoscope"],
    ["catfact", "Random cat facts"], ["dogfact", "Random dog facts"], ["animequote", "Random anime quotes"],
    ["darkjoke", "Dark humor jokes"], ["memejp", "Random Japanese memes"], ["8ball", "Magic 8-Ball answer"],
    ["simplesay", "Bot repeats your words"], ["reverse text", "Reverse written text"], ["fancytext", "Convert to fancy font"],
    ["binary", "Text to binary code"], ["dbz", "Dragon Ball trivia"], ["naruto", "Naruto quiz"], ["pokemon", "Guess the Pokemon"]
];
funCmds.forEach(c => addCmd(c[0], "Fun & Games", c[1], `${PREFIX}${c[0]}`));

// 6. UTILITY, TOOLS & SEARCH (60 Commands)
const utilCmds = [
    ["weather", "Check city weather info"], ["time", "Check world clock time"], ["calculator", "Calculate math expression"],
    ["currency", "Convert currency rates"], ["ipinfo", "Lookup IP address details"], ["whois", "Domain WHOIS lookup"],
    ["shorturl", "Shorten long URLs"], ["tinyurl", "Create TinyURL link"], ["qr", "Generate QR code"],
    ["readqr", "Decode QR code image"], ["google", "Search Google results"], ["wikipedia", "Search Wikipedia pages"],["dict", "Dictionary word meaning"], ["synonym", "Find word synonyms"], ["urban", "Urban dictionary lookup"],
    ["imdb", "Search movies on IMDb"], ["lyrics", "Find song lyrics"], ["github", "Search GitHub user profile"],["npm", "Search NPM packages"], ["tempmail", "Generate temporary email"], ["readmail", "Read temp email inbox"],
    ["ping", "Check bot response speed"], ["uptime", "Check system uptime"], ["speedtest", "Test server speed"],
    ["device", "Detect user device info"], ["element", "Periodic table element"], ["crypto", "Check crypto coin price"],
    ["stock", "Check stock market prices"], ["news", "Latest news headlines"], ["covid", "Check COVID stats"],
    ["timezone", "Convert timezones"], ["unit", "Convert measurement units"], ["pdf", "Convert text to PDF"],
    ["word", "Convert text to DOCX"], ["password", "Generate secure password"], ["hash", "Generate MD5/SHA256 hash"],
    ["encode", "Base64 encode text"], ["decode", "Base64 decode text"], ["dns", "Lookup DNS records"],
    ["portscan", "Check open server ports"], ["headers", "Check HTTP headers"], ["trend", "Twitter/Google trends"],
    ["define", "Define medical/tech terms"], ["bible", "Search Bible verses"], ["quran", "Search Quranic verses"],
    ["hadith", "Search Hadith references"], ["prayer", "Islamic prayer timings"], ["namaz", "Namaz clock schedule"],
    ["zodiac", "Zodiac sign reader"], ["bmi", "Calculate BMI index"], ["calorie", "Calorie requirement meter"],
    ["blood", "Blood donation info"], ["hospital", "Search nearby hospital"], ["speed", "Check connection speed"],
    ["fileinfo", "Analyze uploaded file"], ["hexcolor", "Get HEX color code"], ["randomuser", "Generate fake user profile"]
];
utilCmds.forEach(c => addCmd(c[0], "Utility & Search Tools", c[1], `${PREFIX}${c[0]}`));

// 7. ANIME, COMICS & OVERLAY (30 Commands)
const animeCmds = [
    ["anime", "Search anime database"], ["manga", "Search manga details"], ["waifu", "Get random waifu picture"],
    ["neko", "Get random neko picture"], ["husbando", "Get random husbando picture"], ["wallanime", "Anime HD wallpapers"],
    ["kiss", "Send anime kiss GIF"], ["hug", "Send anime hug GIF"], ["pat", "Send anime pat GIF"],
    ["slap", "Send anime slap GIF"], ["punch", "Send anime punch GIF"], ["cry", "Send anime cry GIF"],
    ["dance", "Send anime dance GIF"], ["smug", "Send anime smug GIF"], ["kill", "Send anime kill GIF"],
    ["bite", "Send anime bite GIF"], ["poke", "Send anime poke GIF"], ["wave", "Send anime wave GIF"],
    ["cuddle", "Send anime cuddle GIF"], ["wink", "Send anime wink GIF"], ["blush", "Send anime blush GIF"],
    ["smile", "Send anime smile GIF"], ["highfive", "Send high five GIF"], ["yeet", "Send yeet GIF"],
    ["bonk", "Send bonk GIF"], ["bully", "Send bully GIF"], ["aot", "Attack on Titan media"],
    ["onepiece", "One Piece media"], ["demon", "Demon Slayer media"], ["jujutsu", "Jujutsu Kaisen media"]
];
animeCmds.forEach(c => addCmd(c[0], "Anime & Manga Zone", c[1], `${PREFIX}${c[0]}`));

// 8. OWNER & SYSTEM SETTINGS (30 Commands)
const ownerCmds = [
    ["setting", "Show all bot settings & command descriptions"], ["settings", "Alias for setting command"],
    ["restart", "Restart bot process"], ["shutdown", "Shutdown bot server"], ["eval", "Execute JavaScript code"],
    ["exec", "Execute bash terminal command"], ["broadcast", "Broadcast message to all chats"], ["bcgroups", "Broadc
