export const IDL = {
    "address": "CeA7jNGCbhQvhAcWPceXNQtf13wm3oNiFtfD6tdU92PV",
    "metadata": {
        "name": "tipping",
        "version": "0.1.0",
        "spec": "0.1.0"
    },
    "version": "0.1.0",
    "name": "tipping",
    "instructions": [
        {
            "name": "initializeUser",
            "accounts": [
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userStats",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [],
            "discriminator": [111, 17, 185, 250, 60, 122, 221, 234]
        },
        {
            "name": "tip",
            "accounts": [
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "recipient",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userStats",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ],
            "discriminator": [242, 241, 136, 23, 186, 61, 214, 109]
        }
    ],
    "accounts": [
        {
            "name": "userStats",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "totalTipsSent",
                        "type": "u64"
                    },
                    {
                        "name": "totalTipsReceived",
                        "type": "u64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            },
            "discriminator": [176, 223, 136, 27, 122, 79, 32, 227]
        }
    ]
} as const;

export type Tipping = typeof IDL;
