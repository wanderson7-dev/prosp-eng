import { NextResponse } from 'next/server';

export async function GET() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Divine Prayer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            orange: '#F97316',
                            green: '#22C55E',
                            dark: '#111827',
                            light: '#F9FAFB'
                        }
                    },
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #FAFAFA;
            color: #111827;
        }
        .btn-green {
            background-color: #22c55e;
            box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.4), 0 4px 6px -2px rgba(34, 197, 94, 0.2);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-green:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.4), 0 10px 10px -5px rgba(34, 197, 94, 0.2);
        }
    </style>
</head>
<body class="font-sans antialiased">
    
    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[#1a1a1a]">
            NO MORE STRUGGLES AND <br class="hidden md:block"/>
            <span class="text-[#F28C28]">RESTRICTIVE LIVING!</span>
        </h1>
        
        <p class="text-gray-600 md:text-lg mb-8 max-w-2xl mx-auto font-medium">
            Discover the Ancient Secret of the Divine Prayer for a Life of Peace, Abundance, and Miracles, right from the comfort of your home!
        </p>

        <a href="#checkout" class="inline-block btn-green text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full mb-12">
            YES, I WANT TO DISCOVER THE DIVINE PRAYER!
        </a>

        <!-- 4 Circles -->
        <div class="flex justify-center items-center gap-[-10px] md:gap-4 flex-wrap md:flex-nowrap">
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden -mr-4 md:mr-0 z-10 relative">
                <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Lotus" class="w-full h-full object-cover"/>
            </div>
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden -mr-4 md:mr-0 z-20 relative">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sunset arms open" class="w-full h-full object-cover"/>
            </div>
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden -mr-4 md:mr-0 z-30 relative">
                <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Jesus concert worship" class="w-full h-full object-cover"/>
            </div>
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden z-40 relative">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Yoga sunset" class="w-full h-full object-cover"/>
            </div>
        </div>
    </section>

    <!-- Gray Background Section -->
    <section class="bg-[#F6F7F9] py-16 border-t border-b border-gray-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-10 text-[#1a1a1a]">
                Now it's your turn to unveil the secrets of the most powerful spiritual connection!
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Step 1 -->
                <div class="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 text-center">
                    <h3 class="text-[#F28C28] font-black text-xl mb-3">STEP 1:</h3>
                    <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                        Access an authentic collection of sacred prayers, from the most beloved classics to surprising manifestations.
                    </p>
                </div>
                <!-- Step 2 -->
                <div class="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 text-center">
                    <h3 class="text-[#F28C28] font-black text-xl mb-3">STEP 2:</h3>
                    <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                        With our clear and detailed guidance, you don't need to be a spiritual master to create miracles in your daily life.
                    </p>
                </div>
                <!-- Step 3 -->
                <div class="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 text-center">
                    <h3 class="text-[#F28C28] font-black text-xl mb-3">STEP 3:</h3>
                    <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                        Each prayer is a celebration of high frequencies and pure intentions, rich in spiritual energy. Learn to attract the best for your life.
                    </p>
                </div>
                <!-- Step 4 -->
                <div class="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 text-center">
                    <h3 class="text-[#F28C28] font-black text-xl mb-3">STEP 4:</h3>
                    <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                        More than just a guide, our protocol invites you to adopt a more conscious, blessed, and peaceful lifestyle, inspired by divine wisdom.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Divine Prayers Section -->
    <section class="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-6xl md:text-8xl font-black text-[#20B038] leading-none tracking-tighter mb-1">
            +50
        </h2>
        <h3 class="text-xl md:text-2xl font-black text-[#F28C28] tracking-widest uppercase mb-6">
            DIVINE PRAYERS
        </h3>
        
        <p class="text-gray-600 md:text-lg mb-12 max-w-2xl mx-auto font-medium">
            Carefully selected and adapted for a practical and blessed routine. From powerful morning prayers for protection to deep evening manifestations for wealth, health, and love.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <!-- Box 1 -->
            <div class="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-center">
                <i class="fas fa-star text-3xl text-[#F28C28] mb-4"></i>
                <h4 class="font-bold text-lg mb-2 text-[#1a1a1a]">Rich in Spiritual Energy</h4>
                <p class="text-gray-500 text-sm">Prayers that boost your faith, health, and motivation daily.</p>
            </div>
            <!-- Box 2 -->
            <div class="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-center">
                <i class="fas fa-heart text-3xl text-[#F28C28] mb-4"></i>
                <h4 class="font-bold text-lg mb-2 text-[#1a1a1a]">Connect with the Divine</h4>
                <p class="text-gray-500 text-sm">A spiritual experience that aligns your soul with universal abundance.</p>
            </div>
        </div>

        <p class="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Click below to claim your special access before it's gone!
        </p>

        <!-- Pricing Card -->
        <div id="checkout" class="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12 max-w-xl mx-auto relative overflow-hidden">
            <h3 class="text-2xl md:text-3xl font-black text-center text-[#1a1a1a] mb-2 leading-tight">
                I WANT TO EXPLORE THE DIVINE PRAYER NOW!
            </h3>
            <p class="text-[#F28C28] text-center font-bold mb-8 text-sm md:text-base">
                Immediate access at an irresistible price with Full Guarantee!
            </p>

            <ul class="space-y-4 mb-8 max-w-xs mx-auto text-left text-[#1a1a1a] font-semibold text-sm md:text-base">
                <li class="flex items-center gap-3">
                    <i class="fas fa-check text-[#20B038] text-xl"></i>
                    <span>Access to the App</span>
                </li>
                <li class="flex items-center gap-3">
                    <i class="fas fa-check text-[#20B038] text-xl"></i>
                    <span>Access to +50 prayers</span>
                </li>
                <li class="flex items-center gap-3">
                    <i class="fas fa-check text-[#20B038] text-xl"></i>
                    <span>Designed for a better life</span>
                </li>
            </ul>

            <div class="text-center mb-6">
                <p class="text-gray-400 font-semibold mb-1">Only</p>
                <div class="text-6xl md:text-7xl font-black text-[#20B038] tracking-tighter">
                    $37
                </div>
            </div>

            <a href="https://pay.hotmart.com/A99214026X?" target="_blank" rel="noopener noreferrer" class="block w-full bg-[#20B038] hover:bg-[#1C9B31] transition-all text-white font-black text-xl py-5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6 text-center">
                BUY NOW
            </a>

            <!-- Trust Badges -->
            <div class="flex justify-center gap-8 text-gray-400">
                <div class="flex flex-col items-center gap-1">
                    <i class="fas fa-shield-alt text-xl"></i>
                    <span class="text-[10px] uppercase font-bold tracking-wider">Secure</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <i class="fas fa-thumbs-up text-xl"></i>
                    <span class="text-[10px] uppercase font-bold tracking-wider">Satisfaction</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <i class="fas fa-lock text-xl"></i>
                    <span class="text-[10px] uppercase font-bold tracking-wider">Privacy</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Guarantee Section -->
    <section class="max-w-3xl mx-auto px-4 text-center mt-12 mb-20">
        <h3 class="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">
            Your purchase is 100% secure with a <span class="text-[#20B038]">60-Day Satisfaction Guarantee!</span>
        </h3>
        <p class="text-gray-500 text-sm md:text-base">
            We trust so much in the quality and transformational power of our guide that we offer an unconditional 60-day guarantee. If for any reason you are not completely satisfied with the material, simply send us an email.
        </p>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-8 bg-white">
        <div class="max-w-4xl mx-auto px-4 text-center text-xs text-gray-400 space-y-2">
            <p>&copy; 2026 FeViva Media LTDA. All rights reserved.</p>
            <p>Disclaimer: This site is not a part of the Facebook website or Facebook Inc.</p>
            <div class="flex justify-center gap-4 pt-2">
                <button onclick="document.getElementById('imprint-modal').style.display='flex'" class="hover:text-gray-800 transition">Imprint</button>
                <span>|</span>
                <a href="#" class="hover:text-gray-800 transition">Terms of Use</a>
                <span>|</span>
                <a href="#" class="hover:text-gray-800 transition">Privacy Policy</a>
            </div>
        </div>
    </footer>

    <!-- Imprint Modal (Kept from existing framework) -->
    <div id="imprint-modal" style="display: none;" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity">
        <div class="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button onclick="document.getElementById('imprint-modal').style.display='none'" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">Imprint</h3>
            
            <div class="space-y-5 text-sm text-gray-600">
                <p class="text-xs text-gray-400 italic mb-4">
                    Information according to § 5 DDG:
                </p>

                <div>
                    <h4 class="font-bold text-gray-900 mb-1">1. Company / Operator</h4>
                    <p>FeViva Media Ltda.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-900 mb-1">2. Contact</h4>
                    <p><strong>Email:</strong> contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    return new NextResponse(html, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
