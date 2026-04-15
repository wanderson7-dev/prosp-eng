import { NextResponse } from 'next/server';

export async function GET() {
    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Offre Spéciale</title>

    <!-- VTurb Scripts & Preloads -->
    <script>!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);</script>
    <link rel="preload" href="https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69dfde00c3a4f690dbcec08b/v4/player.js" as="script">
    <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">
    <link rel="preload" href="https://cdn.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/6826635fb02c09e6effd4736/main.m3u8" as="fetch">
    <link rel="dns-prefetch" href="https://cdn.converteai.net">
    <link rel="dns-prefetch" href="https://scripts.converteai.net">
    <link rel="dns-prefetch" href="https://images.converteai.net">
    <link rel="dns-prefetch" href="https://api.vturb.com.br">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            red: '#FF2A4D',
                            dark: '#111111'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #111111;
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow-x: hidden;
        }
        .glow-container {
            box-shadow: 0 0 20px 5px rgba(255, 42, 77, 0.6);
            border: 2px solid #FF2A4D;
            border-radius: 16px;
            overflow: hidden;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            background-color: #000;
        }
        .bottom-white-bar {
            background-color: white;
            height: 60px;
            width: 100%;
            margin-top: auto;
        }
    </style>
</head>
<body class="antialiased text-white">
    
    <!-- Top Banner -->
    <div class="bg-brand-red text-center py-4 px-4 w-full">
        <p class="text-white font-semibold text-sm md:text-base">
            Offre valable pour une durée limitée.<br/>
            Réservez votre place dès maintenant.
        </p>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex items-center justify-center p-6 w-full">
        <div class="glow-container">
            
            <vturb-smartplayer id="vid-69dfde00c3a4f690dbcec08b" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> 
            <script type="text/javascript"> 
                var s=document.createElement("script"); 
                s.src="https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69dfde00c3a4f690dbcec08b/v4/player.js", s.async=!0,document.head.appendChild(s); 
            </script>

        </div>
    </main>

    <!-- Bottom White Bar -->
    <div class="bottom-white-bar"></div>

</body>
</html>`;

    return new NextResponse(html, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
