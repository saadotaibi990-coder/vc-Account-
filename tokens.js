// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1521300163774120017",
        serverId: "1486273913489985657",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
