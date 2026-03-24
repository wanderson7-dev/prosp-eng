import { NextResponse } from 'next/server';

export async function GET() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - The Prayer of Saint Anthony That Changed the World</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            primary: '#c0392b', // A subtle red
                            dark: '#2c3e50',
                            light: '#f9fafb',
                            border: '#e5e7eb'
                        }
                    },
                    fontFamily: {
                        sans: ['Open Sans', 'sans-serif'],
                        serif: ['Merriweather', 'serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #f9fafb;
            color: #333;
        }
        .article-content p {
            margin-bottom: 1.5rem;
            line-height: 1.8;
            font-size: 1.125rem;
            color: #4b5563;
        }
        .article-content h2 {
            font-family: 'Merriweather', serif;
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: #1f2937;
        }
    </style>
</head>
<body class="font-sans antialiased text-gray-800">

    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center gap-2 cursor-pointer">
                    <div class="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white">
                        <i class="fas fa-cross text-xl"></i>
                    </div>
                    <span class="font-serif font-bold text-2xl text-brand-dark tracking-tight">Faith & <span class="text-brand-primary">Hope</span></span>
                </div>
                <nav class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-600 hover:text-brand-primary font-semibold transition">Home</a>
                    <a href="#" class="text-brand-primary font-semibold transition border-b-2 border-brand-primary pb-1">Spirituality</a>
                    <a href="#" class="text-gray-600 hover:text-brand-primary font-semibold transition">Real Stories</a>
                    <a href="#" class="text-gray-600 hover:text-brand-primary font-semibold transition">About Us</a>
                </nav>
                <div class="md:hidden">
                    <button class="text-gray-600 hover:text-gray-900 focus:outline-none">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        
        <!-- Main Article -->
        <article class="lg:w-2/3 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border">
            <div class="mb-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                <span class="text-brand-primary bg-red-50 px-3 py-1 rounded-full"><i class="fas fa-book-bible mr-2"></i>Sacred History</span>
                <span>•</span>
                <span>6 Minute read</span>
            </div>
            
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-brand-dark">
                The 800-Year Mystery: The Prayer of Saint Anthony That Has Brought Miracles to Thousands
            </h1>

            <div class="flex items-center mb-10 pb-6 border-b border-gray-100">
                <img src="https://i.pravatar.cc/150?img=44" alt="Author" class="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-gray-100">
                <div>
                    <h3 class="font-bold text-gray-900">Carmen L.</h3>
                    <p class="text-sm text-gray-500">Historical Investigative Journalist | March 24, 2026</p>
                </div>
                <div class="ml-auto flex gap-3 text-gray-400">
                    <a href="#" class="hover:text-blue-600 transition"><i class="fab fa-facebook-f text-lg"></i></a>
                    <a href="#" class="hover:text-sky-500 transition"><i class="fab fa-twitter text-lg"></i></a>
                    <a href="#" class="hover:text-green-600 transition"><i class="fab fa-whatsapp text-lg"></i></a>
                </div>
            </div>

            <figure class="mb-10 rounded-2xl overflow-hidden shadow-md">
                <img src="https://picsum.photos/seed/faith/1000/400" alt="Person praying in church" class="w-full h-[400px] object-cover hover:scale-105 transition duration-700">
                <figcaption class="text-center text-sm text-gray-500 mt-3 italic">Throughout the centuries, unwavering faith has been a source of inner peace and spiritual renewal.</figcaption>
            </figure>

            <div class="article-content font-serif">
                <p>
                    <span class="float-left text-6xl leading-none font-bold text-brand-primary mr-3 mt-2">S</span>aint Anthony of Padua is known worldwide as the patron saint of lost things. Millions of believers turn to him every year seeking divine help when they cannot find a material object, but very few know the true depth of his miracles and, above all, the power of his sacred prayer that has remained hidden from much of the world for eight centuries.
                </p>
                <p>
                    Recently, theological and historical studies have once again placed the spotlight on the spiritual life of Father Michael Ashford, a respected priest who has dedicated decades to understanding, translating, and sharing the true meaning of this ancient prayer of Saint Anthony. The stories of personal transformations and healing that resonate around the world are hard to ignore.
                </p>

                <h2>An 800-Year-Old Tradition Rediscovered</h2>
                <p>
                    Exactly 800 years ago, Saint Anthony lived a life of profound Franciscan devotion, touching the hearts of those who heard him preach. His words were not just sermons, but vehicles of divine grace. According to historical archives studied by experts like Father Ashford, one of his most intimate prayers was preserved as a spiritual treasure. It was not about asking for money or superficial things, but seeking celestial guidance, peace in times of extreme anguish, and the restoration of the soul and the home.
                </p>

                <div class="my-10 p-8 bg-brand-light border-l-4 border-brand-primary rounded-r-lg italic text-xl text-gray-700 text-center font-medium shadow-sm">
                    "Faith is not believing that God will do what we want, but believing that God will do what is best. This prayer connects us with that higher perfect will."
                </div>

                <h2>Miracles in the Modern World</h2>
                <p>
                    The fascinating thing about this prayer is not its antiquity, but the effects it has on people in the 21st century. Testimonies from all over the world speak of "spiritual awakenings", homes restored just when they seemed on the verge of breaking apart, people finding purpose after deep depressions, and cases where hope blossomed in the darkest moments.
                </p>
                <p>
                    Father Ashford has been a key voice in uncovering this spiritual treasure. Through his years of teaching, he has explained that Saint Anthony's prayer works because it centers our hearts in gratitude and openness to the divine mystery, creating a space where miracles can occur naturally by aligning human intention with God's grace.
                </p>

                <h2>How Can We Integrate This Practice Today?</h2>
                <p>
                    Practicing faith in a world full of constant distractions is often a challenge. However, the story of Saint Anthony teaches us that we do not need grand ceremonies to encounter the divine; a willing heart and a few moments of daily stillness are enough.
                </p>
                <p>
                    I invite you to learn more about this historic prayer and how to apply it in your life by meditating for a few minutes a day. The greatest transformations always begin within, in the silence of our faith and the conviction that we are not alone on our journey.
                </p>
            </div>

            <!-- Tags -->
            <div class="mt-12 pt-6 border-t border-gray-100 flex items-center gap-3 flex-wrap">
                <span class="font-bold text-gray-700 mr-2">Tags:</span>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition">Faith</a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition">Miracles</a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition">Saint Anthony</a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition">Spirituality</a>
            </div>
            
            <!-- Author Box -->
            <div class="mt-12 bg-brand-light p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img src="https://i.pravatar.cc/300?img=44" alt="Carmen" class="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md">
                <div>
                    <h4 class="text-xl font-bold text-gray-900 mb-2">About Carmen L.</h4>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">Journalist specialized in Church history and ancient spiritual traditions. Throughout her career she has documented hundreds of stories of faith and miracles around the globe, exploring the relationship between human well-being and devotion.</p>
                </div>
            </div>
        </article>

        <!-- Sidebar -->
        <aside class="lg:w-1/3 space-y-10">
            <!-- Search Widget -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 class="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Search the Blog</h3>
                <div class="relative">
                    <input type="text" placeholder="What would you like to read today?" class="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent">
                    <button class="absolute right-3 top-3 text-gray-400 hover:text-brand-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <!-- Recent Posts Widget -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 class="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Recent Articles</h3>
                <div class="space-y-6">
                    <div class="flex gap-4 group">
                        <img src="https://picsum.photos/seed/light/150/150" class="w-20 h-20 rounded-lg object-cover" alt="Lit candle">
                        <div>
                            <p class="text-xs text-brand-primary font-bold mb-1 uppercase tracking-wider">Reflections</p>
                            <a href="#" class="font-bold text-gray-800 leading-tight group-hover:text-brand-primary transition line-clamp-2">The power of lighting a candle in the midst of darkness</a>
                        </div>
                    </div>
                    <div class="flex gap-4 group">
                        <img src="https://picsum.photos/seed/saint/150/150" class="w-20 h-20 rounded-lg object-cover" alt="Saint Francis statue">
                        <div>
                            <p class="text-xs text-brand-primary font-bold mb-1 uppercase tracking-wider">History</p>
                            <a href="#" class="font-bold text-gray-800 leading-tight group-hover:text-brand-primary transition line-clamp-2">The early life of the great Franciscan saints</a>
                        </div>
                    </div>
                    <div class="flex gap-4 group">
                        <img src="https://picsum.photos/seed/pray/150/150" class="w-20 h-20 rounded-lg object-cover" alt="Rosary">
                        <div>
                            <p class="text-xs text-brand-primary font-bold mb-1 uppercase tracking-wider">Practices</p>
                            <a href="#" class="font-bold text-gray-800 leading-tight group-hover:text-brand-primary transition line-clamp-2">Christian meditation: 5 minutes of silence that change the day</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Categories Widget -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 class="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Categories</h3>
                <ul class="space-y-3">
                    <li><a href="#" class="flex justify-between items-center text-gray-600 hover:text-brand-primary transition group"><span class="group-hover:translate-x-1 transition duration-300">Sacred History</span> <span class="bg-gray-100 text-xs px-2 py-1 rounded-full group-hover:bg-red-50 group-hover:text-brand-primary">12</span></a></li>
                    <li><a href="#" class="flex justify-between items-center text-gray-600 hover:text-brand-primary transition group"><span class="group-hover:translate-x-1 transition duration-300">Daily Prayers</span> <span class="bg-gray-100 text-xs px-2 py-1 rounded-full group-hover:bg-red-50 group-hover:text-brand-primary">24</span></a></li>
                    <li><a href="#" class="flex justify-between items-center text-gray-600 hover:text-brand-primary transition group"><span class="group-hover:translate-x-1 transition duration-300">Faith & Miracles</span> <span class="bg-gray-100 text-xs px-2 py-1 rounded-full group-hover:bg-red-50 group-hover:text-brand-primary">8</span></a></li>
                    <li><a href="#" class="flex justify-between items-center text-gray-600 hover:text-brand-primary transition group"><span class="group-hover:translate-x-1 transition duration-300">Real Testimonies</span> <span class="bg-gray-100 text-xs px-2 py-1 rounded-full group-hover:bg-red-50 group-hover:text-brand-primary">15</span></a></li>
                </ul>
            </div>
            
            <!-- Newsletter Widget -->
            <div class="bg-brand-dark p-8 rounded-2xl text-center text-white relative overflow-hidden shadow-lg">
                <div class="absolute -right-4 -top-4 text-brand-primary opacity-20"><i class="fas fa-dove text-8xl"></i></div>
                <h3 class="text-2xl font-serif font-bold mb-3 relative z-10">Join our Community of Faith</h3>
                <p class="text-gray-300 text-sm mb-6 relative z-10">Receive stories of hope and weekly reflections directly in your inbox.</p>
                <form class="relative z-10">
                    <input type="email" placeholder="Your email address" class="w-full bg-white bg-opacity-10 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary text-white mb-3 placeholder-gray-400">
                    <button type="button" class="w-full bg-brand-primary hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition shadow-md">
                        Subscribe
                    </button>
                    <p class="text-xs text-gray-400 mt-3 text-left">We guarantee 100% data privacy. Zero spam.</p>
                </form>
            </div>
        </aside>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 pt-16 pb-8 mt-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div>
                    <div class="flex items-center gap-2 mb-6">
                        <div class="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white">
                            <i class="fas fa-cross text-sm"></i>
                        </div>
                        <span class="font-serif font-bold text-xl text-brand-dark">Faith & <span class="text-brand-primary">Hope</span></span>
                    </div>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6">
                        Our mission is to share the light of spirituality, restoring hope and documenting the wonderful work of faith in everyday life.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li><a href="#" class="hover:text-brand-primary transition">About Us</a></li>
                        <li><a href="#" class="hover:text-brand-primary transition">Contact</a></li>
                        <li><a href="#" class="hover:text-brand-primary transition">Submit Prayer Request</a></li>
                        <li><a href="#" class="hover:text-brand-primary transition">Advertising</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li><button onclick="document.getElementById('imprint-modal').style.display='flex'" class="hover:text-brand-primary transition text-left">Imprint</button></li>
                        <li><a href="terms.html" class="hover:text-brand-primary transition">Terms of Use</a></li>
                        <li><a href="privacy.html" class="hover:text-brand-primary transition">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-sm text-gray-400">
                    &copy; 2026 Faith & Hope Blog. All rights reserved.
                </p>
                <p class="text-xs text-gray-400 max-w-md text-center md:text-right">
                    Disclaimer: The stories and testimonies presented are for spiritual and educational purposes only.
                </p>
            </div>
        </div>
    </footer>

    <!-- Imprint Modal -->
    <div id="imprint-modal" style="display: none;" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity">
        <div class="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button onclick="document.getElementById('imprint-modal').style.display='none'" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="text-2xl font-serif font-bold mb-6 text-brand-dark border-b border-gray-100 pb-4">Imprint</h3>
            
            <div class="space-y-5 text-sm text-gray-600">
                <p class="text-xs text-gray-400 italic mb-4">
                    Information according to § 5 DDG (German Digital Services Act):
                </p>

                <div>
                    <h4 class="font-bold text-gray-900 mb-1">1. Company / Operator</h4>
                    <p>FeViva Media Ltda.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-900 mb-1">2. Contact</h4>
                    <p><strong>Email:</strong> contact@faith-hope.example</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-900 mb-1">3. Legal Representation</h4>
                    <p>Represented by: Executive Director</p>
                </div>
                
                <div class="mt-8 pt-6 border-t border-gray-100">
                    <p class="text-xs text-gray-500">
                        European Commission platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr" target="_blank" class="text-brand-primary hover:underline">https://ec.europa.eu/consumers/odr</a>
                    </p>
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
