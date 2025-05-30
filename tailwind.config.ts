
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'poppins': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				'raleway': ['Raleway', 'Poppins', 'system-ui', 'sans-serif'],
				'nunito': ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Nouvelle palette MARMEET
				marmeet: {
					// Couleurs principales
					primary: '#FCD34D',        // Jaune doux chaleureux
					secondary: '#FFA726',      // Orange punchy
					accent: '#D14D4D',         // Rouge tomate mondial
					
					// Variations de jaune
					yellow: '#FCD34D',
					'yellow-light': '#FDE68A',
					'yellow-dark': '#F59E0B',
					
					// Variations d'orange
					orange: '#FFA726',
					'orange-light': '#FFB74D',
					'orange-dark': '#FF9800',
					
					// Fond et crème
					cream: '#FFF8E7',          // Fond principal ivoire
					'cream-soft': '#FFFAEB',
					'cream-warm': '#FEF3C7',
					
					// Textes
					text: '#1F2937',           // Gris foncé bleuté
					'text-light': '#374151',
					'text-muted': '#6B7280',
					
					// Accent multiculturel
					world: '#D14D4D',          // Rouge tomate
					'world-light': '#EF4444',
					'world-dark': '#B91C1C'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 8px rgba(252, 211, 77, 0.3))'
					},
					'50%': {
						filter: 'drop-shadow(0 0 16px rgba(252, 211, 77, 0.6))'
					}
				},
				'warm-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						filter: 'drop-shadow(0 4px 8px rgba(255, 167, 38, 0.2))'
					},
					'50%': {
						transform: 'scale(1.02)',
						filter: 'drop-shadow(0 8px 16px rgba(255, 167, 38, 0.3))'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'warm-pulse': 'warm-pulse 2s ease-in-out infinite'
			},
			boxShadow: {
				'warm': '0 4px 6px -1px rgba(252, 211, 77, 0.1), 0 2px 4px -1px rgba(252, 211, 77, 0.06)',
				'warm-lg': '0 10px 15px -3px rgba(252, 211, 77, 0.1), 0 4px 6px -2px rgba(252, 211, 77, 0.05)',
				'orange': '0 4px 6px -1px rgba(255, 167, 38, 0.1), 0 2px 4px -1px rgba(255, 167, 38, 0.06)',
				'cozy': '0 8px 25px -5px rgba(31, 41, 55, 0.1), 0 8px 10px -6px rgba(31, 41, 55, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
