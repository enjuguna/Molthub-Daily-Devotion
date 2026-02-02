# Daily Devotion Skill 📖

A Moltbot skill that creates personalized daily devotions with the verse of the day, warm pastoral messages, structured prayers, and time-aware greetings.

## Features

- **🌅 Verse of the Day** - Automatically fetched from the ourmanna API
- **📝 Pastoral Devotion** - Warm, encouraging message based on the verse
- **🙏 Structured Prayer** - 6-part prayer following traditional Christian format
- **⏰ Time-Aware Greetings** - Personalized based on time of day
- **💬 Prayer Personalization** - Option to include specific prayer requests

## How It Works

### 1. Verse Fetching
The skill fetches the daily verse from [ourmanna.com](https://ourmanna.com), a trusted source for daily Scripture. If the API is unavailable, backup verses are used.

### 2. Devotional Message
A warm, pastoral devotion is generated that includes:
- Opening hook to draw you in
- Historical/cultural context of the verse
- Core message and meaning
- Cross-references to related scriptures
- Personal application
- Today's challenge (actionable step)

### 3. Structured Prayer
The prayer follows a six-part structure:

| Part | Focus |
|------|-------|
| 1. Praise | Glorifying God's attributes |
| 2. Thanks | Expressing gratitude for blessings |
| 3. Forgiveness | Seeking forgiveness for sins |
| 4. Intercession | Prayer for loved ones & specific requests |
| 5. Application | Asking God to help apply the verse |
| 6. Closing | Committing the day to God |

### 4. Time Greetings
Based on your local time:
- ☀️ **Morning** (5am-12pm): Energizing start to the day
- 🌤️ **Afternoon** (12pm-5pm): Mid-day encouragement
- 🌅 **Evening** (5pm-9pm): Peaceful reflection
- 🌙 **Night** (9pm-5am): Restful blessing

## Usage

Simply ask Moltbot for your daily devotion:

```
"Give me my daily devotion"
"What's today's devotion?"
"I need my morning devotion"
```

### With Prayer Requests
Include specific prayer requests in your initial prompt:

```
"Give me my daily devotion. Please pray for my upcoming job interview."
"Daily devotion please - include prayers for my family's health."
"Morning devotion with prayers for wisdom in my career decision."
```

## Helper Scripts

### Fetch Verse
Run the verse fetcher directly:

```bash
cd daily_devotion
npx ts-node scripts/fetch_verse.ts
```

### Install Dependencies
```bash
npm install typescript ts-node @types/node
```

## Example Output

```markdown
# 📖 Daily Devotion - Wednesday, January 29, 2026

## Today's Verse
> "May the grace of the Lord Jesus Christ, and the love of God, 
> and the fellowship of the Holy Spirit be with you all."
> — 2 Corinthians 13:14 (NIV)

---

## Devotional Message

Have you ever felt truly seen and loved, not for what you do, 
but simply for who you are? That's the heart of today's verse...

[Full devotion continues...]

---

## 🙏 Today's Prayer

Heavenly Father, we come before You in awe of Your majesty...

[Complete prayer continues...]

---

## Good evening! 🌅

As this day winds down, may you find rest in God's presence. 
Reflect on His goodness today and trust Him for tomorrow.
```

## API Reference

### ourmanna API
- **Endpoint**: `https://beta.ourmanna.com/api/v1/get?format=json&order=daily`
- **Method**: GET
- **Response**: JSON with verse text, reference, and version

## License

This skill is provided for personal devotional use.

---

*"Your word is a lamp for my feet, a light on my path."* — Psalm 119:105
