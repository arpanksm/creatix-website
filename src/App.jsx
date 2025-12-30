import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Search, Smartphone, Share2, Film, PenTool, 
  Map, Code, CheckCircle, Rocket, ArrowRight, ArrowLeft, 
  Check, Instagram, Twitter, Linkedin, Menu, X, Star,
  Users, Briefcase, Award, Zap, CreditCard, Lock, ShieldCheck,
  ChevronRight, Layout, ShoppingBag, Terminal, Video, Palette,
  BarChart, Layers, Info, Plus, Minus, HelpCircle, FileText
} from 'lucide-react';

const THEME_COLOR = "purple"; 
const PRIMARY_HEX = "#7c3aed"; 

// --- SEO Helper Component ---
const MetaController = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | Creatix Digital Agency` : "Creatix | Future of Digital Craft";
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "Creatix is an award-winning digital agency specializing in Web Development, App Development, SEO, and Branding. We build brands that defy expectations.";
  }, [title, description]);

  return null;
};

// --- Data ---
const servicesData = [
    {
        id: 'web-dev',
        title: 'Web Development',
        icon: 'Globe',
        shortDesc: 'Custom, responsive, and high-performance websites.',
        longDesc: 'Choose the perfect technology stack for your business. We offer specialized packages for WordPress, Shopify, and Custom Development designed to scale with you.',
        rate: 'Starts ₹4,999',
        hasPackages: true,
        subCategories: [
            {
                id: 'wordpress',
                name: "WordPress",
                icon: "Layout",
                description: "Perfect for blogs, portfolios, and business sites.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "4,999", 
                        features: [
                            "1-3 Pages Professional Setup", 
                            "Free Theme Installation", 
                            "Mobile & Tablet Responsive Design", 
                            "Contact Form with Email Alerts", 
                            "Social Media Icons Integration", 
                            "WhatsApp Chat Button Setup", 
                            "Basic Speed Optimization",
                            "1 Round of Revisions",
                            "5-7 Days Delivery Time",
                            "Note: Hosting & Domain Charged Extra"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "9,999", 
                        features: [
                            "Everything in Basic +",
                            "5-7 Pages Complete Website", 
                            "Premium Theme Setup (License Extra)", 
                            "Yoast SEO Plugin Configuration", 
                            "Advanced Speed Caching Setup", 
                            "Security Firewall (Wordfence)", 
                            "Google Analytics Integration",
                            "Image Compression Setup",
                            "15 Days Technical Support",
                            "Note: Hosting & Domain Charged Extra"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "17,999", 
                        features: [
                            "Everything in Standard +",
                            "10-15 Pages / E-commerce Setup", 
                            "WooCommerce Payment Gateway", 
                            "Custom CSS / Design Elements", 
                            "Product Filtering & Search", 
                            "User Login/Register System", 
                            "Automated Backup Setup", 
                            "Pop-up / Lead Gen Form",
                            "1 Months Priority Support",
                            "Note: Hosting & Domain Charged Extra"
                        ] 
                    }
                ]
            },
            {
                id: 'shopify',
                name: "Shopify",
                icon: "ShoppingBag",
                description: "Build your dream online store with ease.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "6,999", 
                        features: [
                            "Store Setup & Account Config", 
                            "Free Theme Installation", 
                            "Up to 5 Products Listing", 
                            "Payment Gateway Integration", 
                            "Standard Shipping Rates Setup", 
                            "Legal Pages (Privacy/Refund)", 
                            "Menu & Navigation Setup",
                            "Domain Connection Support",
                            "Note: Shopify Plan Billed to Client"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "12,999", 
                        features: [
                            "Everything in Basic +",
                            "Premium Theme Setup (License Extra)", 
                            "Up to 25 Products Listing", 
                            "Collection & Category Organization", 
                            "Basic SEO (Meta Titles/Desc)", 
                            "Newsletter / Email Signup Popup", 
                            "Product Review App Setup", 
                            "Trust Badges Integration",
                            "15 Days Store Support",
                            "Note: Shopify Plan Billed to Client"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "19,999", 
                        features: [
                            "Everything in Standard +",
                            "Custom Liquid Code Modifications", 
                            "50+ Products Bulk Upload", 
                            "Advanced App Integration (Upsell)", 
                            "Abandoned Cart Recovery Setup", 
                            "Instagram/Facebook Shop Sync", 
                            "Order Tracking Page Setup", 
                            "Speed Optimization Audit",
                            "1 month Priority Support",
                            "Note: Shopify Plan Billed to Client"
                        ] 
                    }
                ]
            },
            {
                id: 'custom',
                name: "Custom Coded",
                icon: "Terminal",
                description: "High-performance sites built with React & Node.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "9,999", 
                        features: [
                            "Single Page / Landing Page Dev", 
                            "HTML5/CSS3/React Clean Code", 
                            "Mobile Responsive Layout", 
                            "Fast Loading Speed Optimization", 
                            "Contact Form (EmailJS)", 
                            "Scroll Animations (Basic)", 
                            "Social Media Links",
                            "Source Code Handover",
                            "Note: UI Design Charged Extra",
                            "Note: Deployment Costs Extra"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "19,999", 
                        features: [
                            "Everything in Basic +",
                            "5-7 Pages Multi-page Website", 
                            "Figma to React Implementation", 
                            "CMS Integration (Sanity/Strapi)", 
                            "Interactive Animations (Framer)", 
                            "Dynamic Routing Setup", 
                            "SEO Friendly Structure (Next.js)", 
                            "API Integration (Basic)", 
                            "15 Days Maintenance",
                            "Note: UI Design Charged Extra"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "39,999", 
                        features: [
                            "Everything in Standard +",
                            "Full Stack Architecture (MERN)", 
                            "Complex Database Design (MongoDB)", 
                            "Secure User Authentication", 
                            "Payment Gateway API Integration", 
                            "Admin Dashboard Development", 
                            "Search & Filter Functionality", 
                            "Cloud Deployment (AWS/Vercel)", 
                            "1 Month Bug Fix Support",
                            "Note: UI Design Charged Extra"
                        ] 
                    }
                ]
            }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
            'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=80',
            'https://images.unsplash.com/photo-1559028012-481c9300c3b0?w=500&q=80'
        ]
    },
    {
        id: 'seo',
        title: 'SEO Optimization',
        icon: 'Search',
        shortDesc: 'Boost your rankings and drive organic traffic.',
        longDesc: 'Our data-driven SEO strategies ensure your brand is visible to the right audience. We handle on-page, off-page, and technical SEO to improve your search engine rankings sustainably.',
        rate: 'Starts ₹3,999/mo',
        hasPackages: true,
        subCategories: [
            {
                id: 'seo-plans',
                name: "SEO Plans",
                icon: "BarChart",
                description: "Rank higher and grow your organic reach.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "3,999", 
                        features: [
                            "5 Focus Keywords Targeting", 
                            "On-Page Optimization (Titles/Tags)", 
                            "Google My Business Setup", 
                            "Google Search Console Setup", 
                            "Basic Competitor Analysis", 
                            "Robots.txt & Sitemap Creation", 
                            "Image Alt Text Optimization", 
                            "Monthly Performance Report",
                            "Broken Link Check",
                            "Note: Min 3 Months Recommended"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "9,999", 
                        features: [
                            "Everything in Basic +",
                            "15 Focus Keywords Targeting", 
                            "Technical SEO Audit & Fixes", 
                            "5 High Quality Backlinks/mo", 
                            "Existing Content Optimization", 
                            "Schema Markup Implementation", 
                            "Internal Linking Strategy", 
                            "Local SEO Citation Building", 
                            "Bi-Weekly Progress Report",
                            "Mobile Usability Fixes"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "19,999", 
                        features: [
                            "Everything in Standard +",
                            "30+ Focus Keywords Targeting", 
                            "Advanced Link Building Strategy", 
                            "2 SEO-Optimized Blogs (800 words)", 
                            "Core Web Vitals Optimization", 
                            "Conversion Rate Optimization (CRO)", 
                            "Guest Posting Outreach", 
                            "Competitor Gap Analysis", 
                            "Weekly Strategy Calls",
                            "Dedicated Account Manager"
                        ] 
                    }
                ]
            }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1571721795195-a2d057279102?w=500&q=80',
            'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80',
            'https://images.unsplash.com/photo-1560472355-536de3962603?w=500&q=80'
        ]
    },
    {
        id: 'app-dev',
        title: 'App Development',
        icon: 'Smartphone',
        shortDesc: 'Native and cross-platform mobile applications.',
        longDesc: 'Turn your ideas into powerful mobile experiences. We develop intuitive, feature-rich iOS and Android apps using the latest technologies like React Native and Flutter.',
        rate: 'Starts ₹49,999',
        hasPackages: true,
        subCategories: [
            {
                id: 'hybrid-app',
                name: "Hybrid App",
                icon: "Smartphone",
                description: "Cost-effective apps that run on both iOS and Android.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "49,999", 
                        features: [
                            "WebView / Wrapper Application", 
                            "Convert Website to Android App", 
                            "Splash Screen Configuration", 
                            "App Icon Setup", 
                            "Basic Push Notifications", 
                            "Pull-to-Refresh Functionality", 
                            "Internet Connectivity Check", 
                            "APK File Generation",
                            "Note: UI Design Charged Extra",
                            "Note: Play Console Fee ($25) Extra"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "99,999", 
                        features: [
                            "React Native / Flutter Development", 
                            "Up to 5 Custom Screens Setup", 
                            "Firebase User Authentication", 
                            "Google Maps / Location API", 
                            "Custom Navigation Menu", 
                            "Dynamic API Integration", 
                            "Social Media Login", 
                            "Store Upload Assistance",
                            "Note: UI Design Charged Extra",
                            "Note: Play Console Fee Extra"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "1,49,999", 
                        features: [
                            "Everything in Standard +",
                            "Full Custom Backend (Node.js)", 
                            "Admin Panel for Management", 
                            "Payment Gateway Integration", 
                            "In-App Purchases / Subscriptions", 
                            "Real-time Chat / Notifications", 
                            "Complex Database Structure", 
                            "IOS Version Generation", 
                            "1 Month Priority Support",
                            "Note: Server Costs Billed to Client"
                        ] 
                    }
                ]
            }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80',
            'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&q=80'
        ]
    },
    {
        id: 'social-media',
        title: 'Social Media Marketing',
        icon: 'Share2',
        shortDesc: 'Engage your audience and grow your brand.',
        longDesc: 'We create compelling content and manage your social presence across all platforms. Our strategies focus on engagement, brand awareness, and converting followers into customers.',
        rate: 'Starts ₹4,999/mo',
        hasPackages: true,
        subCategories: [
            {
                id: 'smm-plans',
                name: "Growth Plans",
                icon: "Share2",
                description: "Boost your presence on Instagram, Facebook & LinkedIn.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "6,999", 
                        features: [
                            "2 Social Platforms Managed", 
                            "10 High-Quality Static Posts + 1 Reel/mo", 
                            "Basic Caption Copywriting", 
                            "Niche Hashtag Research", 
                            "Monthly Content Scheduling", 
                            "Profile Bio Optimization", 
                            "Basic Highlights Cover Design", 
                            "1 Round of Revisions",
                            "No Community Management",
                            "Monthly Insights Report"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "14,999", 
                        features: [
                            "Everything in Basic +",
                            "3 Social Platforms Managed", 
                            "12 Static Posts + 4 Reels/mo", 
                            "Community Mgmt (Reply to Comments)", 
                            "Custom Branded Graphic Design", 
                            "Story Updates (2/week)", 
                            "Monthly Strategy Call", 
                            "Ad Manager Account Setup", 
                            "Competitor Ad Analysis",
                            "Note: Ad Budget Billed to Client"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "29,999", 
                        features: [
                            "Everything in Standard +",
                            "All Major Platforms Managed", 
                            "Daily Content (Post/Story/Reel)", 
                            "8 Professional Reels per Month", 
                            "Influencer Outreach Strategy", 
                            "Advanced Ad Campaign Management", 
                            "24/7 Reputation Management", 
                            "Crisis Management Support", 
                            "Tapes and Raw photos provided by Client",
                            "Note: Ad Budget Billed to Client",
                             
                        ] 
                    }
                ]
            }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80',
            'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80',
            'https://images.unsplash.com/photo-1611926653458-09294b3019dc?w=500&q=80'
        ]
    },
    {
        id: 'video-editing',
        title: 'Video Editing',
        icon: 'Film',
        shortDesc: 'Professional editing for reels, ads, and corporate videos.',
        longDesc: 'From high-paced social media reels to polished corporate documentaries, our editors bring your raw footage to life with professional grading, transitions, and sound design.',
        rate: 'Starts ₹999/video',
        hasPackages: true,
        subCategories: [
            {
                id: 'reels',
                name: "Reels & Shorts",
                icon: "Video",
                description: "Engaging vertical content for TikTok/Instagram.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "999", 
                        features: [
                            "Up to 30 Sec Duration", 
                            "Simple Jump Cuts", 
                            "Royalty Free Background Music", 
                            "Basic Text Overlays", 
                            "Standard Color Correction", 
                            "Aspect Ratio Conversion (9:16)", 
                            "Audio Noise Reduction", 
                            "2 Rounds of Revisions",
                            "Delivery in 24-48 Hours"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "2,499", 
                        features: [
                            "Everything in Basic +",
                            "Up to 60 Sec Duration", 
                            "Dynamic Transitions (Zoom/Spin)", 
                            "Sound Effects Design (SFX)", 
                            "Motion Graphics Text", 
                            "Trending Viral Styles", 
                            "B-Roll Integration", 
                            "Beat Sync Editing",
                            "5 Revisions"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "4,999", 
                        features: [
                            "Everything in Standard +",
                            "Advanced Visual Effects (VFX)", 
                            "Custom 2D/3D Animations", 
                            "Engaging Subtitles/Captions", 
                            "Premium Stock Footage", 
                            "Clickbait Thumbnail Design", 
                            "Source File Included (Premiere/AE)", 
                            "Dedicated Senior Editor", 
                            "4K Export Quality"
                        ] 
                    }
                ]
            },
            {
                id: 'long-form',
                name: "Long Form",
                icon: "Film",
                description: "YouTube videos, corporate intros, and vlogs.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "3,999", 
                        features: [
                            "Up to 5 Mins Duration", 
                            "Narrative Story Cutting", 
                            "Background Music Selection", 
                            "Basic Titles & Lower Thirds", 
                            "Audio Cleaning & Leveling", 
                            "Color Balance Adjustment", 
                            "Green Screen Removal (Basic)", 
                            "1 Round of Revisions",
                            "Full HD (1080p) Export"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "9,999", 
                        features: [
                            "Everything in Basic +",
                            "Up to 15 Mins Duration", 
                            "Multi-Cam Sync & Editing", 
                            "Advanced Color Grading (Log)", 
                            "Custom Animated Intro/Outro", 
                            "Zoom & Pan Effects", 
                            "Pattern Interrupts", 
                            "Sound Design & Mixing",
                            "3 Rounds of Revisions"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "14,999", 
                        features: [
                            "Everything in Standard +",
                            "Up to 30 Mins Duration", 
                            "Cinematic Documentary Style", 
                            "Advanced Audio Engineering", 
                            "4K High Bitrate Rendering", 
                            "Custom Motion Graphics", 
                            "Animation Integration", 
                            "Dedicated Creative Director", 
                            "Thumbnail Design Included",
                            "Source Project Files"
                        ] 
                    }
                ]
            }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&q=80',
            'https://images.unsplash.com/photo-1574717432707-c2571987ba52?w=500&q=80',
            'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?w=500&q=80'
        ]
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        icon: 'PenTool',
        shortDesc: 'Stunning logos, posters, and brand identities.',
        longDesc: 'Visual storytelling that sticks. We design memorable logos, eye-catching posters, and cohesive brand identities that resonate with your target market.',
        rate: 'Starts ₹999',
        hasPackages: true,
        subCategories: [
            {
                id: 'branding',
                name: "Logo & Brand",
                icon: "Palette",
                description: "Build a strong visual identity.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "999", 
                        features: [
                            "2 Professional Logo Concepts", 
                            "High Res JPG & PNG Files", 
                            "Transparent Background File", 
                            "Standard Color Palette", 
                            "2 Days Delivery Time", 
                            "1 Round of Revisions", 
                            "Usage Rights for Digital", 
                            "Watermark-Free Final File",
                            "Note: No Source/Vector Files"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "2,999", 
                        features: [
                            "Everything in Basic +",
                            "4 Unique Logo Concepts", 
                            "Vector Source Files (AI/EPS/SVG)", 
                            "3D Mockup Presentation", 
                            "Social Media Profile Kit", 
                            "Typography & Fonts Guide", 
                            "Print-Ready Files (CMYK)", 
                            "4 Revisions",
                            "Priority Support"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "6,999", 
                        features: [
                            "Everything in Standard +",
                            "Complete Brand Identity System", 
                            "Stationery Design (Business Card)", 
                            "Letterhead & Envelope Design", 
                            "5 Social Media Post Templates", 
                            "Comprehensive Brand Book", 
                            "Copyright Ownership Transfer", 
                            "Favicon Design",
                            "VIP Support"
                        ] 
                    }
                ]
            },
            {
                id: 'ui-ux',
                name: "UI/UX Design",
                icon: "Layout",
                description: "User-centric interfaces for Web & Mobile.",
                plans: [
                    { 
                        name: "Basic", 
                        price: "4,999", 
                        features: [
                            "Wireframes & User Flow Creation", 
                            "1-3 Screens (Landing Page)", 
                            "Low Fidelity Prototyping", 
                            "Standard Color Palette Setup", 
                            "Typography Selection", 
                            "Figma Source File Included", 
                            "Exportable Assets (SVG/PNG)", 
                            "1 Round of Revisions",
                            "Note: No Coding/Development"
                        ] 
                    },
                    { 
                        name: "Standard", 
                        price: "9,999", 
                        features: [
                            "Everything in Basic +",
                            "High Fidelity UI Design", 
                            "5-10 Screens (Web or App)", 
                            "Interactive Clickable Prototype", 
                            "Mobile Responsive Layouts", 
                            "Basic Style Guide Creation", 
                            "Iconography Set", 
                            "Developer Handoff Support",
                            "5 Revisions per Screen",
                            "Note: No Coding/Development"
                        ] 
                    },
                    { 
                        name: "Premium", 
                        price: "19,999", 
                        features: [
                            "Everything in Standard +",
                            "Complete Design System", 
                            "20+ Screens (Complex Flows)", 
                            "Advanced Prototyping (Logic)", 
                            "User Journey Mapping", 
                            "Dark/Light Mode Versions", 
                            "Custom Illustration Assets", 
                            "Usability Testing Session", 
                            "Priority Delivery",
                            "Note: No Coding/Development"
                        ] 
                    }
                ]
            }
        ],
        portfolio: [
            'https://images.unsplash.com/photo-1626785774573-4b7993143d2d?w=500&q=80',
            'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&q=80',
            'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&q=80'
        ]
    }
];
const faqs = [
    {
        question: "Why is there a non-refundable booking fee?",
        answer: "The ₹99 fee secures your consultation slot and covers the initial time our experts spend analyzing your requirements to build a tailored strategy."
    },
    {
        question: "What happens after I pay the booking fee?",
        answer: "Our team will contact you within 24 hours to schedule a detailed consultation. We will discuss your goals, finalize the scope, and draft a formal agreement."
    },
    {
        question: "Is UI/UX Design included in development packages?",
        answer: "No, our development packages assume you will provide the design (Figma/XD files). If you need us to design the UI/UX from scratch, it is charged as a separate service."
    },
    {
        question: "Are costs for Themes, Hosting, or Domains included?",
        answer: "No. Third-party costs such as Domain names, Server Hosting, Premium WordPress/Shopify Themes, and Play Store Console fees are billed directly to you (the client)."
    },
    {
        question: "Is the remaining amount paid all at once?",
        answer: "No. After the agreement is signed, payments are typically broken down into milestones (e.g., 50% upfront, 50% on completion) to ensure your satisfaction."
    },
    {
        question: "Do you offer custom packages?",
        answer: "Absolutely! The packages listed are our most popular ones, but we specialize in custom solutions tailored to your specific business needs and budget."
    }
];

const teamMembers = [
    { 
        name: "Arpan Kusum", 
        role: "Founder", 
        img: "https://madhuramsliet.com/assets/avatars/arpanku.jpg", 
        instagram: "https://instagram.com/arpanksm_",
        linkedin: "https://linkedin.com/in/arpan-kusum-559279224/" 
    },
    { 
        name: "Pawan Sharma", 
        role: "Co-Founder", 
        img: "https://media.licdn.com/dms/image/v2/D5603AQFu0Tt1RZMi0w/profile-displayphoto-scale_400_400/B56ZrGPE.zJ8Ak-/0/1764262434806?e=1768435200&v=beta&t=mCKtqv0dV0YNyR3Wea8rdPLGamO-oLsAEre6Y29li30",
        instagram: "https://instagram.com/pawansharmma5",
        linkedin: "https://linkedin.com/in/pawan-sharma-4b07b921b/" 
    },
    { 
        name: "Prakhyat Prakhar", 
        role: "Co-Founder", 
        img: "https://madhuramsliet.com/assets/avatars/prakhyat.jpg",
        instagram: "#",
        linkedin: "https://www.linkedin.com/in/prakhyat-prakhar/?originalSubdomain=in" 
    }
];

const roadmapSteps = [
    { title: "Discovery", desc: "We analyze your goals and market.", icon: "Search" },
    { title: "Strategy", desc: "A tailored roadmap for success.", icon: "Map" },
    { title: "Design", desc: "Visualizing the user experience.", icon: "PenTool" },
    { title: "Development", desc: "Building with clean, robust code.", icon: "Code" },
    { title: "Quality", desc: "Rigorous testing and refinement.", icon: "CheckCircle" },
    { title: "Launch & Grow", desc: "Deployment and ongoing optimization.", icon: "Rocket" }
];

const testimonials = [
    { name: "Yashika Sharma", role: "CEO, Nitara International", text: "Working with Creatix was honestly smooth from day one. They understood our idea quickly and delivered a clean, modern website exactly as promised. Communication was clear and timelines were respected. Would definitely work with them again.", rating: 5 },
    { name: "Prateek", role: "Founder, Sarvsaathi NGO", text: "Working with Creatix was honestly smooth from day one. They understood our idea quickly and delivered a clean, modern website exactly as promised. Communication was clear and timelines were respected. Hats Off guys.", rating: 5 },
    { name: "Nikita Gupta", role: "Marketing Dir.", text: "Creatix helped us redesign our website and optimize it for performance. The loading speed and UI improved a lot, and our bounce rate reduced significantly. Good technical knowledge and practical suggestions.", rating: 4 }
];

// Updated stats with numeric values for animation
const stats = [
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Happy Clients", value: 85, suffix: "+" },
    { label: "Team Experts", value: 20, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" }
];

const iconMap = {
    Globe, Search, Smartphone, Share2, Film, PenTool, 
    Map, Code, CheckCircle, Rocket, Users, Briefcase, Award, Zap, CreditCard, Lock, ShieldCheck,
    ChevronRight, Layout, ShoppingBag, Terminal, Video, Palette, BarChart, Layers, Info,
    Plus, Minus, HelpCircle, Menu, X, FileText, Instagram
};

const IconComponent = ({ name, size = 24, className, ariaHidden = true }) => {
    const LucideIcon = iconMap[name];
    return LucideIcon ? <LucideIcon size={size} className={className} aria-hidden={ariaHidden} /> : null;
};

// --- 3D Background Component (Vanilla JS Canvas) ---
const ThreeDBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let points = [];
        // Reduced points for mobile performance
        const numPoints = width < 768 ? 100 : 300; 
        const sphereRadius = 400;

        for(let i=0; i<numPoints; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            points.push({
                x: sphereRadius * Math.sin(phi) * Math.cos(theta),
                y: sphereRadius * Math.sin(phi) * Math.sin(theta),
                z: sphereRadius * Math.cos(phi)
            });
        }

        let angleX = 0;
        let angleY = 0;
        const focalLength = 400;
        let animationFrameId;

        function animate() {
            ctx.fillStyle = '#050505'; 
            ctx.fillRect(0, 0, width, height);
            
            angleX += 0.001;
            angleY += 0.001;

            const cx = width / 2;
            const cy = height / 2;

            ctx.strokeStyle = '#7c3aed';
            ctx.lineWidth = 0.5;

            const projectedPoints = points.map(p => {
                let y = p.y * Math.cos(angleX) - p.z * Math.sin(angleX);
                let z = p.y * Math.sin(angleX) + p.z * Math.cos(angleX);
                let x = p.x;

                let x2 = x * Math.cos(angleY) - z * Math.sin(angleY);
                let z2 = x * Math.sin(angleY) + z * Math.cos(angleY);
                
                const scale = focalLength / (focalLength + z2);
                const x2d = x2 * scale + cx;
                const y2d = y * scale + cy;
                const alpha = (z2 + sphereRadius) / (2 * sphereRadius);

                return { x: x2d, y: y2d, scale, alpha, z: z2 };
            });

            ctx.beginPath();
            for (let i = 0; i < projectedPoints.length; i++) {
                const p1 = projectedPoints[i];
                const pointSize = Math.max(0.5, 3 * p1.scale);
                ctx.fillStyle = `rgba(124, 58, 237, ${p1.alpha})`; 
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, pointSize, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < projectedPoints.length; j++) {
                    const p2 = projectedPoints[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = dx*dx + dy*dy;
                    if (dist < 2000) { 
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(124, 58, 237, ${Math.min(p1.alpha, p2.alpha) * 0.2})`;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none " aria-hidden="true" />;
};

// --- Helper for scroll animations ---
const RevealOnScroll = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

// --- Animated Counter Component ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                let start = 0;
                // Parse int just in case, though we pass numbers
                const endVal = parseInt(end); 
                if (isNaN(endVal)) return;
                
                let startTime = null;
                const step = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    // Ease out quart
                    const easeProgress = 1 - Math.pow(1 - progress, 4);
                    
                    setCount(Math.floor(easeProgress * endVal));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={ref}>{count}{suffix}</span>;
};

// --- Payment Modal Component ---
const PaymentModal = ({ bookingInfo, onClose, onComplete }) => {
    const [step, setStep] = useState(1); // 1: User Info, 2: Payment, 3: Processing, 4: Success
    const [details, setDetails] = useState({ name: '', email: '', phone: '', card: '', expiry: '', cvc: '' });

    // Focus Trap & Aria Modal management
    const modalRef = useRef(null);
    useEffect(() => {
        if(modalRef.current) modalRef.current.focus();
    }, [step]);

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePay = (e) => {
        e.preventDefault();
        setStep(3);
        setTimeout(() => {
            setStep(4);
            setTimeout(() => {
                onComplete({
                    ...details, 
                    service: bookingInfo.serviceName, 
                    package: bookingInfo.packageName,
                    amount: bookingInfo.amount, 
                    paid: true
                });
            }, 1500);
        }, 2000);
    };

    return (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                ref={modalRef}
                tabIndex="-1"
                className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-md relative shadow-2xl shadow-purple-900/50 outline-none"
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
                    aria-label="Close Modal"
                >
                    <X size={20} aria-hidden="true"/>
                </button>
                
                {step === 1 && (
                    <form onSubmit={handleInfoSubmit} className="animate-fade-in">
                        <h3 id="modal-title" className="text-2xl font-bold font-display mb-2">Your Details</h3>
                        <p className="text-gray-400 mb-6 text-sm">Please provide your contact information to proceed with booking.</p>
                        
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                                <input id="name" required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition" 
                                    value={details.name} onChange={e => setDetails({...details, name: e.target.value})} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                                <input id="email" required type="email" placeholder="mail@example.com" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition" 
                                    value={details.email} onChange={e => setDetails({...details, email: e.target.value})} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
                                <input id="phone" required type="tel" placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition" 
                                    value={details.phone} onChange={e => setDetails({...details, phone: e.target.value})} />
                            </div>
                        </div>

                        <button type="submit" className="w-full mt-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2">
                            Proceed to Payment <ArrowRight size={16} aria-hidden="true" />
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handlePay} className="animate-fade-in">
                        <button onClick={() => setStep(1)} type="button" className="text-sm text-gray-400 hover:text-white mb-4 flex items-center gap-1 transition" aria-label="Go back to previous step"><ArrowLeft size={14} aria-hidden="true"/> Back</button>
                        <h3 id="modal-title" className="text-2xl font-bold font-display mb-1">Secure Checkout</h3>
                        <div className="mb-6 text-sm text-gray-400">
                            Booking: <span className="text-white">{bookingInfo.serviceName}</span>
                            {bookingInfo.packageName && <span className="text-purple-400"> • {bookingInfo.packageName}</span>}
                        </div>
                        
                        <div className="mb-6 p-4 bg-purple-900/20 rounded-xl border border-purple-500/30">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300">Consultation Fee</span>
                                <span className="text-2xl font-bold text-white">₹{bookingInfo.amount}</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-purple-500/20 text-xs text-purple-200">
                                <div className="flex gap-2 items-start">
                                    <Info size={14} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <p className="mb-1 font-bold">Non-refundable booking fee.</p>
                                        <p className="opacity-80">The remaining amount (approx. ₹{bookingInfo.originalPrice}) will be payable after a mutual agreement is signed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <label htmlFor="card-number" className="sr-only">Card Number</label>
                                <CreditCard className="absolute top-3.5 left-3 text-gray-500" size={18} aria-hidden="true"/>
                                <input id="card-number" required placeholder="Card Number" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pl-10 text-white focus:border-purple-500 outline-none transition" 
                                    maxLength="19" value={details.card} onChange={e => setDetails({...details, card: e.target.value})} />
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                     <label htmlFor="card-expiry" className="sr-only">Expiry Date</label>
                                    <input id="card-expiry" required placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition" 
                                        maxLength="5" value={details.expiry} onChange={e => setDetails({...details, expiry: e.target.value})} />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="card-cvc" className="sr-only">CVC</label>
                                    <input id="card-cvc" required placeholder="CVC" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition" 
                                        maxLength="3" type="password" value={details.cvc} onChange={e => setDetails({...details, cvc: e.target.value})} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full mt-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition flex items-center justify-center gap-2">
                            <Lock size={16} aria-hidden="true" /> Pay ₹99 & Book
                        </button>
                        
                        <div className="mt-4 flex justify-center gap-4 text-gray-500 opacity-50">
                            <div className="flex items-center gap-1 text-xs"><ShieldCheck size={12} aria-hidden="true"/> SSL Encrypted</div>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <div className="text-center py-12 animate-fade-in">
                        <div role="status" className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Securing Slot...</h4>
                        <p className="text-gray-400">Processing booking fee of ₹99.</p>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-8 animate-fade-in">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                            <Check size={40} className="text-white" aria-hidden="true" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2 text-white">Booking Confirmed!</h4>
                        <p className="text-gray-400">Our team will contact you shortly.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Legal Pages Component ---
const LegalPage = ({ type, onBack }) => {
    const isTerms = type === 'terms';
    
    return (
        <main className="min-h-screen pt-24 pb-12 container mx-auto px-6">
            <button onClick={onBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition" aria-label="Go Back">
                <ArrowLeft size={20} aria-hidden="true" /> Back
            </button>
            
            <article className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
                <header className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                        <FileText size={24} aria-hidden="true" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-display">{isTerms ? 'Terms of Service' : 'Refund Policy'}</h1>
                </header>
                
                <div className="space-y-8 text-gray-300 leading-relaxed">
    {isTerms ? (
        <>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">1. Scope of Services</h3>
                <p>Creatix agrees to provide the services described in the specific package. <strong>Note:</strong> Web & App development packages <u>do not</u> include UI/UX Design unless explicitly purchased as an add-on. Development will proceed based on designs provided by the Client or standard templates.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">2. Third-Party Costs & Exclusions</h3>
                <p>Package prices are for service/labor only. The Client is responsible for all third-party expenses, including but not limited to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Domain Names & Web Hosting/Server Fees</li>
                    <li>Premium WordPress/Shopify Themes & Plugin Licenses</li>
                    <li>Google Play Console ($25) & Apple Developer Program ($99) Fees</li>
                    <li>Paid API Usage (e.g., Advanced Google Maps, SMS Gateways)</li>
                </ul>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">3. Payments</h3>
                <p>A non-refundable booking fee of ₹99 is required to schedule a consultation. Subsequent payments are typically structured as 50% advance to begin work and 50% upon project completion before final credentials handover.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">4. Timelines & Delays</h3>
                <p>Project timelines are estimates. Creatix is not responsible for delays caused by the Client's failure to provide content, approvals, or third-party account access (e.g., OTPs, Hosting credentials) on time.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h3>
                <p>Upon full payment, the Client owns the rights to the final code and design assets. Creatix retains the right to display the work in its portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
            </section>
        </>
    ) : (
        <>
            <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl mb-6">
                <p className="font-bold text-white flex items-center gap-2"><Info size={18} aria-hidden="true" /> Essential Note</p>
                <p className="mt-1 text-sm text-purple-200">The initial ₹99 booking fee is strictly non-refundable as it covers the administrative cost of scheduling and preliminary analysis.</p>
            </div>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">1. Third-Party Purchases</h3>
                <p>Any funds collected for the purchase of Domains, Hosting, Theme Licenses, or App Store Accounts are <strong>100% non-refundable</strong> once the purchase has been executed on your behalf, as these are external vendors.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">2. Project Cancellations</h3>
                <p>If a project is cancelled by the Client after the agreement is signed but before design/dev work begins, the 50% advance may be refunded minus a 10% processing fee. The ₹99 booking fee remains non-refundable.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">3. Work in Progress</h3>
                <p>Once the project has moved to the "Design" or "Development" phase, the initial 50% deposit becomes non-refundable to cover the time and effort of our team/students.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-3">4. Satisfaction Guarantee</h3>
                <p>We provide revisions as per your package limits. Refunds are not issued based on "change of mind" regarding style preferences once the initial design concepts have been approved by the Client.</p>
            </section>
        </>
    )}
</div>
            </article>
        </main>
    );
};

// --- Main App Component ---
export default function App() {
    const [view, setView] = useState('home'); 
    const [selectedService, setSelectedService] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [bookingData, setBookingData] = useState(null); 
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        // Inject FontAwesome
        const link = document.createElement('link');
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const storedBookings = localStorage.getItem('creatix_bookings');
        if (storedBookings) setBookings(JSON.parse(storedBookings));
    }, []);

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setView('service-details');
        window.scrollTo(0, 0);
    };

    const handlePaymentStart = (serviceName, packageName, fullPrice) => {
        setBookingData({ 
            serviceName, 
            packageName, 
            amount: "99", 
            originalPrice: fullPrice
        });
    };

    const handlePaymentComplete = (paymentData) => {
        const newBooking = { 
            ...paymentData, 
            id: Date.now(), 
            status: 'Consultation Booked', 
            date: new Date().toLocaleDateString(),
            paymentStatus: 'Paid Booking Fee'
        };
        const updatedBookings = [newBooking, ...bookings];
        setBookings(updatedBookings);
        localStorage.setItem('creatix_bookings', JSON.stringify(updatedBookings));
        setBookingData(null);
        setView('home');
    };

    const handleAdminLogin = (password) => {
        if (password === 'admin_123') { 
            setIsAdmin(true);
            setView('admin');
        } else {
            alert("Incorrect Password");
        }
    };

    const Navbar = () => {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        return (
            <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all duration-300" aria-label="Main Navigation">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <button 
                        className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0" 
                        onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}
                        aria-label="Creatix Home"
                    >
                        <img 
                            src="creatix_logo.png" 
                            alt="Creatix Digital Agency Logo" 
                            className="w-10 h-auto object-contain transition-transform group-hover:scale-110"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }} 
                        />
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg hidden items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30" aria-hidden="true">C</div>
                        <span className="text-2xl font-bold tracking-tight font-display tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">CREATIX</span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                        <button onClick={() => setView('home')} className="text-gray-300 hover:text-white transition">Home</button>
                        <button onClick={() => setView('team')} className="text-gray-300 hover:text-white transition">Our Team</button>
                        <button onClick={() => { setView('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-gray-300 hover:text-white transition">Services</button>
                        <button 
                            onClick={() => {
                                setView('home');
                                setTimeout(() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'}), 100);
                            }}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full font-bold transition shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50 transform hover:-translate-y-0.5 text-white"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed top-[75px] bottom-0 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 animate-fade-in shadow-2xl overflow-y-auto z-40">
                        <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); }} className="text-lg text-gray-300 hover:text-white transition text-left">Home</button>
                        <button onClick={() => { setView('team'); setIsMobileMenuOpen(false); }} className="text-lg text-gray-300 hover:text-white transition text-left">Our Team</button>
                        <button onClick={() => { 
                            setView('home'); 
                            setIsMobileMenuOpen(false);
                            setTimeout(() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}), 100); 
                        }} className="text-lg text-gray-300 hover:text-white transition text-left">Services</button>
                        <button 
                            onClick={() => {
                                setView('home');
                                setIsMobileMenuOpen(false);
                                setTimeout(() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'}), 100);
                            }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-center text-white"
                        >
                            Get Started
                        </button>
                    </div>
                )}
            </nav>
        );
    };

    // Reuse Hero, TeamPage, StatsSection, ServicesSection, RoadmapSection, Testimonials components (Standard)
    const Hero = () => (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Hero Section">
            <div className="container mx-auto px-6 text-center z-10">
                <RevealOnScroll>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-300 mb-8 animate-pulse-slow">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
                        Accepting New Projects
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll className="delay-100">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight font-display tracking-tight">
                        FUTURE OF <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#00ffff] animate-gradient-x">
                            DIGITAL CRAFT
                        </span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll className="delay-200">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
                        Creatix is an award-winning agency blending <span className="text-white font-medium">art</span>, <span className="text-white font-medium">technology</span>, and <span className="text-white font-medium">strategy</span> to build brands that defy expectations.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll className="delay-300">
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button onClick={() => document.getElementById('services').scrollIntoView({behavior:'smooth'})} className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" aria-hidden="true"/></span>
                        </button>
                        <button onClick={() => document.getElementById('contact-form').scrollIntoView({behavior:'smooth'})} className="px-8 py-4 glass-panel rounded-full font-bold text-lg hover:bg-white/10 transition border border-white/10 hover:border-white/30 backdrop-blur-md">
                            Get a Quote
                        </button>
                    </div>
                </RevealOnScroll>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" aria-hidden="true"></div>
        </section>
    );

    const TeamPage = () => (
        <main className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-20">
                    <RevealOnScroll>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-display mb-6">Meet The <span className="text-purple-500">Minds</span></h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">The visionaries, creators, and strategists behind Creatix's digital revolution.</p>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, idx) => (
                        <RevealOnScroll key={idx} className={`delay-${idx * 100}`}>
                            <div className="group relative glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition duration-500">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img src={member.img} alt={`Portrait of ${member.name}, ${member.role}`} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold font-display mb-1">{member.name}</h3>
                                    <p className="text-purple-400 font-medium tracking-wide uppercase text-sm">{member.role}</p>
                                    
                                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        {member.instagram && (
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition" aria-label={`${member.name}'s Instagram`}>
                                                <Instagram size={16} aria-hidden="true" />
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition" aria-label={`${member.name}'s LinkedIn`}>
                                                <Linkedin size={16} aria-hidden="true" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </main>
    );

    const StatsSection = () => (
        <section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm" aria-label="Company Statistics">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <RevealOnScroll key={idx} className={`delay-${idx * 100}`}>
                            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2 font-display">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-purple-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );

    const ServicesSection = () => (
        <section id="services" className="py-20 md:py-32 relative">
            <div className="absolute top-1/2 left-0 w-full h-96 bg-purple-900/10 blur-[100px] -z-10" aria-hidden="true"></div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-6">Our Expertise</h2>
                        <p className="text-lg sm:text-xl text-gray-400">Comprehensive digital solutions engineered for modern businesses.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <RevealOnScroll key={service.id} className={`delay-${idx * 100}`}>
                            <article 
                                onClick={() => handleServiceClick(service)}
                                onKeyDown={(e) => { if(e.key === 'Enter') handleServiceClick(service) }}
                                role="button"
                                tabIndex="0"
                                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 text-purple-400 group-hover:text-white group-hover:scale-110 transition duration-300 shadow-lg shadow-purple-900/20">
                                        <IconComponent name={service.icon} size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">{service.shortDesc}</p>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{service.rate.replace('Starting at ', '')}</span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition duration-300">
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );

    const RoadmapSection = () => (
        <section id="process" className="py-20 md:py-32 relative bg-black/40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-6">The Process</h2>
                    <p className="text-gray-400">From concept to launch, we follow a rigorous path to perfection.</p>
                </div>
                
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent" aria-hidden="true"></div>
                    
                    <div className="space-y-12 md:space-y-24">
                        {roadmapSteps.map((step, idx) => (
                            <RevealOnScroll key={idx}>
                                <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 w-full text-left md:text-right group">
                                        <div className={`p-6 rounded-2xl glass-panel border border-white/5 hover:border-purple-500/30 transition duration-500 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <h4 className="font-bold text-xl mb-2 font-display text-white group-hover:text-purple-400 transition">{step.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-black border-4 border-purple-600 shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 hidden md:block">
                                        <div className="text-white-600 text-8xl font-black opacity-60 font-display select-none text-center" aria-hidden="true">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    const FAQSection = () => {
        const [openIndex, setOpenIndex] = useState(null);

        return (
            <section className="py-24 bg-black/40">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-400">Everything you need to know about our process.</p>
                    </div>
                    
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="glass-panel border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                                <button 
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
                                    aria-expanded={openIndex === idx}
                                    aria-controls={`faq-answer-${idx}`}
                                >
                                    <span className="font-bold text-lg pr-8">{faq.question}</span>
                                    {openIndex === idx ? <Minus className="text-purple-400 flex-shrink-0" aria-hidden="true"/> : <Plus className="text-gray-400 flex-shrink-0" aria-hidden="true"/>}
                                </button>
                                <div id={`faq-answer-${idx}`} className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const Testimonials = () => (
        <section className="py-20 md:py-32 overflow-hidden">
             <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">Client Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="glass-panel p-8 rounded-2xl relative border border-white/5 hover:bg-white/5 transition duration-300">
                             <div className="absolute -top-4 left-8 text-6xl text-purple-600 font-serif opacity-50" aria-hidden="true">"</div>
                             <p className="text-gray-300 mb-6 italic relative z-10">{t.text}</p>
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg" aria-hidden="true">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white">{t.name}</h5>
                                    <p className="text-xs text-purple-400 uppercase tracking-wider">{t.role}</p>
                                </div>
                             </div>
                             <div className="flex gap-1 mt-4 text-yellow-500" aria-label={`Rated ${t.rating} out of 5 stars`}>
                                 {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true"/>)}
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    const ContactForm = ({ servicePreselect }) => {
        const [formState, setFormState] = useState({
            name: '',
            email: '',
            service: servicePreselect || 'General Inquiry',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            const newBooking = { ...formState, id: Date.now(), status: 'Pending', date: new Date().toLocaleDateString(), paymentStatus: 'Inquiry' };
            const updatedBookings = [newBooking, ...bookings];
            setBookings(updatedBookings);
            localStorage.setItem('creatix_bookings', JSON.stringify(updatedBookings));
            alert("Inquiry sent successfully!");
            setView('home');
        };

        return (
            <section id="contact-form" className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20" aria-hidden="true"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="lg:col-span-2 bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-12 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold font-display mb-4">Let's Talk</h3>
                                <p className="text-gray-300 mb-8">Ready to start your next project? We are here to help you grow.</p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Map size={20} aria-hidden="true"/></div>
                                        <span>123 Innovation Dr, Tech City</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Smartphone size={20} aria-hidden="true"/></div>
                                        <span>+1 (555) 000-0000</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Share2 size={20} aria-hidden="true"/></div>
                                        <span>hello@creatix.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label htmlFor="contact-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                        <input id="contact-name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-purple-500 outline-none text-white" 
                                            value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="contact-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                        <input id="contact-email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-purple-500 outline-none text-white" 
                                            value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                                    </div>
                                </div>
                                <div className="group">
                                    <label htmlFor="contact-service" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service</label>
                                    <select id="contact-service" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-purple-500 outline-none text-white"
                                        value={formState.service} onChange={e => setFormState({...formState, service: e.target.value})}>
                                        <option className="bg-gray-900">General Inquiry</option>
                                        {servicesData.map(s => <option key={s.id} className="bg-gray-900" value={s.title}>{s.title}</option>)}
                                    </select>
                                </div>
                                <div className="group">
                                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Details</label>
                                    <textarea id="contact-message" required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-purple-500 outline-none text-white"
                                        placeholder="Tell us about your project timeline and goals..." value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition flex items-center justify-center gap-2 text-white">
                                    Send Inquiry <Rocket size={20} aria-hidden="true"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ServiceDetailView = () => {
        const [activeTab, setActiveTab] = useState(0);

        return (
            <main className="pt-24 min-h-screen animate-fade-in">
                <div className={`bg-gradient-to-b from-purple-900/20 to-transparent py-20 border-b border-white/5`}>
                    <div className="container mx-auto px-6">
                            <button onClick={() => setView('home')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition group" aria-label="Go Back Home">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition"><ArrowLeft className="w-4 h-4" aria-hidden="true"/></div> Back to Home
                        </button>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white mb-6 shadow-lg shadow-purple-500/30`}>
                                    <IconComponent name={selectedService.icon} size={32} />
                                </div>
                                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 font-display">{selectedService.title}</h1>
                                <p className="text-2xl text-gray-300 max-w-3xl font-light">{selectedService.longDesc}</p>
                            </div>
                            <div className="glass-panel p-8 rounded-2xl text-center min-w-[240px] border border-purple-500/20">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Starting From</p>
                                <p className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400`}>{selectedService.rate}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-20">
                    {/* Check if this service has packages (Web Development) */}
                    {selectedService.hasPackages ? (
                        <div className="mb-20">
                            <h3 className="text-3xl font-bold mb-8 font-display text-center">Select Your Package</h3>
                            
                            {/* Tab Navigation */}
                            <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist">
                                {selectedService.subCategories.map((cat, idx) => (
                                    <button 
                                        key={cat.id}
                                        role="tab"
                                        aria-selected={activeTab === idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === idx ? 'bg-white text-black shadow-lg shadow-white/20 scale-105' : 'glass-panel text-gray-400 hover:text-white'}`}
                                    >
                                        <IconComponent name={cat.icon} size={18} />
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            {/* Package Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {selectedService.subCategories[activeTab].plans.map((plan, idx) => (
                                    <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${idx === 1 ? 'bg-purple-900/20 border-purple-500 shadow-xl shadow-purple-900/30' : 'glass-panel border-white/10 hover:border-purple-500/30'}`}>
                                        {idx === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Recommended</div>}
                                        <h4 className="text-xl font-bold mb-2 text-gray-300">{plan.name}</h4>
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                                            <span className="text-gray-500 text-sm"> / project</span>
                                            {/* GST Note added here */}
                                            <div className="text-xs text-gray-400 mt-1">* + 18% GST Applicable</div>
                                        </div>
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Check className="text-purple-400 w-5 h-5 flex-shrink-0" aria-hidden="true"/>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button 
                                            onClick={() => handlePaymentStart(`${selectedService.title} - ${selectedService.subCategories[activeTab].name}`, plan.name, plan.price)}
                                            className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${idx === 1 ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30' : 'bg-white text-black hover:bg-gray-200'}`}
                                        >
                                            Book Slot (₹99) <ArrowRight size={16} aria-hidden="true"/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Default View for other services without detailed packages
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-2 space-y-16">
                                <div>
                                    <h3 className="text-3xl font-bold mb-8 font-display">Deliverables</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {selectedService.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-6 glass-panel rounded-xl border border-white/5 hover:border-purple-500/30 transition">
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                    <Check className="text-green-400 w-4 h-4" aria-hidden="true"/>
                                                </div>
                                                <span className="text-lg font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="sticky top-32">
                                    <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                                        <h3 className="text-2xl font-bold mb-4 font-display">Start Project</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed">
                                            Secure your slot immediately by completing the initial booking payment.
                                        </p>
                                        <button 
                                            onClick={() => handlePaymentStart(selectedService.title, 'Standard Booking', selectedService.priceValue.toString())}
                                            className="w-full py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold transition mb-4 shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                                        >
                                            <CreditCard size={18} aria-hidden="true"/> Book Slot (₹99)
                                        </button>
                                        <div className="text-xs text-center text-gray-500 mt-2">* + 18% GST Applicable on full amount</div>
                                        <button 
                                            onClick={() => document.getElementById('detail-contact').scrollIntoView({behavior:'smooth'})}
                                            className="w-full py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-xl font-bold transition mt-4"
                                        >
                                            Request Custom Quote
                                        </button>
                                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                                            <Zap size={12} aria-hidden="true"/> Fast secure processing
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Portfolio Section (Shared) */}
                    <div className="mt-20">
                        <h3 className="text-3xl font-bold mb-8 font-display">Featured Work</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {selectedService.portfolio.map((img, idx) => (
                                <div key={idx} className="aspect-[4/5] rounded-2xl overflow-hidden group relative cursor-pointer border border-white/10">
                                    <img src={img} alt={`${selectedService.title} Project ${idx + 1}`} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                                        <span className="font-bold text-lg translate-y-4 group-hover:translate-y-0 transition duration-500">Project Name</span>
                                        <span className="text-purple-400 text-sm">View Case Study</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div id="detail-contact">
                    <ContactForm servicePreselect={selectedService.title} />
                </div>

                {bookingData && (
                    <PaymentModal 
                        bookingInfo={bookingData} 
                        onClose={() => setBookingData(null)} 
                        onComplete={handlePaymentComplete} 
                    />
                )}
            </main>
        );
    };

    const AdminPanel = () => (
        <main className="min-h-screen pt-24 pb-12 container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-bold font-display">Admin Dashboard</h1>
                <button onClick={() => { setIsAdmin(false); setView('home'); }} className="text-red-400 hover:text-red-300 border border-red-500/30 px-6 py-2 rounded-full hover:bg-red-500/10 transition">Logout</button>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-gray-300">
                                <th className="p-6 font-bold uppercase text-xs tracking-wider">Date</th>
                                <th className="p-6 font-bold uppercase text-xs tracking-wider">Client</th>
                                <th className="p-6 font-bold uppercase text-xs tracking-wider">Service Details</th>
                                <th className="p-6 font-bold uppercase text-xs tracking-wider">Payment</th>
                                <th className="p-6 font-bold uppercase text-xs tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="p-12 text-center text-gray-500">No bookings found yet.</td>
                                </tr>
                            ) : (
                                bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-white/5 transition">
                                        <td className="p-6 text-sm">{booking.date}</td>
                                        <td className="p-6">
                                            <div className="font-bold text-white">{booking.name}</div>
                                            <div className="text-xs text-gray-500">{booking.email}</div>
                                        </td>
                                        <td className="p-6">
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 block w-fit mb-1">
                                                {booking.service}
                                            </span>
                                            {booking.package && <span className="text-xs text-gray-400">Package: {booking.package}</span>}
                                        </td>
                                        <td className="p-6">
                                            {booking.paymentStatus === 'Paid Booking Fee' ? (
                                                <span className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-500/10 px-3 py-1 rounded-full w-fit">
                                                    <CheckCircle size={14} aria-hidden="true"/> Paid ₹{booking.amount}
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
                                                    Inquiry
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-6">
                                            <span className="text-sm font-medium text-white">
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );

    const LoginScreen = () => {
        const [pass, setPass] = useState('');
        return (
            <div className="h-screen flex items-center justify-center bg-black fixed inset-0 z-50">
                 <ThreeDBackground />
                <div className="glass-panel p-10 rounded-3xl w-full max-w-md text-center border border-white/10 shadow-2xl relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-purple-600 mx-auto mb-6 flex items-center justify-center text-2xl font-bold" aria-hidden="true">C</div>
                    <h2 className="text-3xl font-bold mb-2 font-display">Admin Portal</h2>
                    <p className="text-gray-400 mb-8">Enter secure passkey.</p>
                    <label htmlFor="admin-pass" className="sr-only">Password</label>
                    <input 
                        id="admin-pass"
                        type="password" 
                        className="w-full bg-black/50 border border-white/10 rounded-xl p-4 mb-4 focus:border-purple-500 focus:outline-none text-center tracking-widest text-white transition focus:bg-black/80"
                        placeholder="••••••••"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <div className="flex gap-3">
                        <button onClick={() => setView('home')} className="flex-1 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition font-medium">Cancel</button>
                        <button onClick={() => handleAdminLogin(pass)} className="flex-1 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-bold shadow-lg shadow-purple-900/50">Login</button>
                    </div>
                </div>
            </div>
        );
    };

    const WhatsAppButton = () => (
        <a 
            href="https://wa.me/911234567890" // Replace with your actual WhatsApp number
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-green-900/50 hover:scale-110 transition duration-300 animate-bounce-slow"
            aria-label="Chat with us on WhatsApp"
        >
            <i className="fab fa-whatsapp text-3xl text-white" aria-hidden="true"></i>
        </a>
    );

    const Footer = () => (
        <footer className="border-t border-white/5 py-16" role="contentinfo">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                     <div className="flex items-center gap-3">
                        <img 
                            src="creatix_logo.png" 
                            alt="Creatix Logo" 
                            className="w-8 h-auto opacity-80"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className="text-2xl font-bold font-display tracking-wider">CREATIX</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition duration-300" aria-label="Follow us on Instagram"><Instagram size={18} aria-hidden="true"/></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition duration-300" aria-label="Follow us on Twitter"><Twitter size={18} aria-hidden="true"/></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition duration-300" aria-label="Connect with us on LinkedIn"><Linkedin size={18} aria-hidden="true"/></a>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-gray-500 text-sm">
                    <p>© 2026 Creatix Digital Agency. All rights reserved.</p>
                    <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0">
                        <button onClick={() => setView('terms')} className="hover:text-purple-500 transition">Terms of Service</button>
                        <button onClick={() => setView('refund')} className="hover:text-purple-500 transition">Refund Policy</button>
                        <button onClick={() => setView('login')} className="hover:text-purple-500 transition" aria-label="Admin Login">-</button>
                    </div>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen text-white relative font-['Rajdhani',sans-serif] overflow-x-hidden selection:bg-purple-500 selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
                
                :root {
                    --font-display: 'Orbitron', sans-serif;
                    --font-body: 'Rajdhani', sans-serif;
                }

                .font-display { font-family: var(--font-display); }
                
                body { font-family: var(--font-body); font-size: 18px; }

                ::-webkit-scrollbar { width: 6px; }
                ::-webkit-scrollbar-track { background: #050505; }
                ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
                ::-webkit-scrollbar-thumb:hover { background: #7c3aed; }
                
                .glass-panel {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 5s ease infinite;
                }
                
                @keyframes gradient-x {
                    0% { background-position: 0% 50% }
                    50% { background-position: 100% 50% }
                    100% { background-position: 0% 50% }
                }

                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <ThreeDBackground />
            
            {/* Dynamic SEO Meta Tags based on view */}
            {view === 'home' && <MetaController title="Home" description="Creatix is a leading digital agency providing top-tier web development, app creation, and digital marketing services." />}
            {view === 'team' && <MetaController title="Our Team" description="Meet the expert minds behind Creatix - Developers, Designers, and Strategists committed to your success." />}
            {view === 'service-details' && selectedService && <MetaController title={selectedService.title} description={selectedService.shortDesc} />}
            {view === 'terms' && <MetaController title="Terms of Service" description="Read our terms and conditions regarding payments, project timelines, and deliverables." />}
            {view === 'refund' && <MetaController title="Refund Policy" description="Understand our refund policies for booking fees and project cancellations." />}
            {view === 'login' && <MetaController title="Admin Login" description="Secure login portal for Creatix administrators." />}
            
            {view !== 'login' && <Navbar />}

            {view === 'home' && (
                <main>
                    <Hero />
                    <StatsSection />
                    <ServicesSection />
                    <RoadmapSection />
                    <Testimonials />
                    <FAQSection />
                    <ContactForm />
                </main>
            )}

            {view === 'team' && <TeamPage />}

            {view === 'service-details' && selectedService && (
                <ServiceDetailView />
            )}

            {(view === 'terms' || view === 'refund') && (
                <LegalPage type={view} onBack={() => setView('home')} />
            )}

            {view === 'login' && <LoginScreen />}

            {view === 'admin' && isAdmin && <AdminPanel />}

            {view !== 'login' && <Footer />}
            
            <WhatsAppButton />
        </div>
    );
}