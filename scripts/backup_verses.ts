/**
 * Backup verses for when the ourmanna API is unavailable
 * These are popular, encouraging verses that work well for daily devotions
 */

export interface BackupVerse {
    text: string;
    reference: string;
    version: string;
}

export const BACKUP_VERSES: BackupVerse[] = [
    // Hope & Future
    {
        text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11",
        version: "NIV"
    },

    // Strength
    {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13",
        version: "NKJV"
    },

    // Provision
    {
        text: "The LORD is my shepherd; I shall not want.",
        reference: "Psalm 23:1",
        version: "KJV"
    },

    // Trust & Guidance
    {
        text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6",
        version: "NIV"
    },

    // Courage
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
        reference: "Joshua 1:9",
        version: "NIV"
    },

    // Peace
    {
        text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
        reference: "John 14:27",
        version: "NIV"
    },

    // Love
    {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16",
        version: "NIV"
    },

    // Rest
    {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28",
        version: "NIV"
    },

    // Faith
    {
        text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        reference: "Hebrews 11:1",
        version: "NIV"
    },

    // Protection
    {
        text: "The LORD is my light and my salvation— whom shall I fear? The LORD is the stronghold of my life— of whom shall I be afraid?",
        reference: "Psalm 27:1",
        version: "NIV"
    },

    // God's Presence
    {
        text: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
        reference: "Deuteronomy 31:8",
        version: "NIV"
    },

    // Renewal
    {
        text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        reference: "Isaiah 40:31",
        version: "NIV"
    },

    // Worry
    {
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6",
        version: "NIV"
    },

    // God's Care
    {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7",
        version: "NIV"
    },

    // New Mercies
    {
        text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
        reference: "Lamentations 3:22-23",
        version: "NIV"
    },

    // Purpose
    {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28",
        version: "NIV"
    },

    // Victory
    {
        text: "No, in all these things we are more than conquerors through him who loved us.",
        reference: "Romans 8:37",
        version: "NIV"
    },

    // God's Word
    {
        text: "Your word is a lamp for my feet, a light on my path.",
        reference: "Psalm 119:105",
        version: "NIV"
    },

    // Joy
    {
        text: "The joy of the LORD is your strength.",
        reference: "Nehemiah 8:10",
        version: "NIV"
    },

    // Blessing
    {
        text: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
        reference: "Numbers 6:24-26",
        version: "NIV"
    },

    // Patience
    {
        text: "Wait for the LORD; be strong and take heart and wait for the LORD.",
        reference: "Psalm 27:14",
        version: "NIV"
    },

    // God's Nature
    {
        text: "The LORD is compassionate and gracious, slow to anger, abounding in love.",
        reference: "Psalm 103:8",
        version: "NIV"
    },

    // Wisdom
    {
        text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
        reference: "James 1:5",
        version: "NIV"
    },

    // Goodness
    {
        text: "Taste and see that the LORD is good; blessed is the one who takes refuge in him.",
        reference: "Psalm 34:8",
        version: "NIV"
    },

    // Eternal Love
    {
        text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        reference: "Romans 8:38-39",
        version: "NIV"
    }
];

/**
 * Get a random backup verse
 */
export function getRandomBackupVerse(): BackupVerse {
    const randomIndex = Math.floor(Math.random() * BACKUP_VERSES.length);
    return BACKUP_VERSES[randomIndex];
}
