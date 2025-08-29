# Smooth Animations Guide

Your website now features comprehensive smooth animations that enhance user experience and create engaging interactions. Here's everything you need to know about using them.

## 🎯 Quick Start

### 1. Basic Animation Classes
Add these classes directly to any HTML element:

```tsx
<div className="animate-fadeInUp">Fades in from bottom</div>
<div className="animate-slideInLeft">Slides in from left</div>
<div className="animate-scaleIn">Scales up from small to full size</div>
```

### 2. Scroll-Triggered Animations
Use the `AnimatedSection` component for scroll-triggered animations:

```tsx
import AnimatedSection from "@/components/ui/animated-section";

<AnimatedSection animationType="fadeInUp" delay={200}>
  <YourComponent />
</AnimatedSection>
```

## 🎨 Available Animation Types

### Entrance Animations
- `animate-fadeInUp` - Fade in while sliding up
- `animate-fadeInDown` - Fade in while sliding down
- `animate-slideInLeft` - Slide in from left
- `animate-slideInRight` - Slide in from right
- `animate-scaleIn` - Scale up from small to full
- `animate-rotateIn` - Rotate in with scale effect
- `animate-bounceIn` - Bouncy entrance animation

### Continuous Animations
- `animate-float` - Gentle floating motion
- `animate-pulse-slow` - Slow pulsing effect
- `animate-shimmer` - Shimmer loading effect

### Staggered Animations
Use these classes with `animate-on-scroll` for staggered effects:
- `animate-stagger-1` - 0.1s delay
- `animate-stagger-2` - 0.2s delay
- `animate-stagger-3` - 0.3s delay
- `animate-stagger-4` - 0.4s delay
- `animate-stagger-5` - 0.5s delay

## 🚀 Advanced Usage

### Scroll-Triggered Animations
The `AnimatedSection` component automatically detects when elements come into view:

```tsx
<AnimatedSection 
  animationType="fadeInUp" 
  delay={200}
  duration={800}
  threshold={0.1}
  rootMargin="0px 0px -50px 0px"
  triggerOnce={true}
>
  <YourContent />
</AnimatedSection>
```

**Props:**
- `animationType`: Type of animation to use
- `delay`: Delay before animation starts (ms)
- `duration`: Animation duration (ms)
- `threshold`: When to trigger animation (0-1)
- `rootMargin`: Margin around viewport
- `triggerOnce`: Whether to animate only once

### Custom Hover Effects
Enhance interactive elements with these classes:

```tsx
<Button className="hover:scale-105 hover:rotate-1 transition-all duration-300">
  Hover me!
</Button>
```

**Available hover effects:**
- `hover:scale-105` - Scale up on hover
- `hover:rotate-1` - Slight rotation on hover
- `hover:translate-x-2` - Move right on hover
- `hover:translate-y-[-4px]` - Move up on hover
- `hover:shadow-glow` - Add glow shadow on hover

### Transition Classes
Use these for consistent timing across your site:

```tsx
<div className="transition-smooth">Smooth transitions</div>
<div className="transition-spring">Bouncy transitions</div>
<div className="transition-elegant">Elegant transitions</div>
<div className="transition-bounce">Bouncy transitions</div>
```

## 🎭 Animation Examples

### Hero Section with Staggered Animations
```tsx
<div className="space-y-6">
  <h1 className="animate-on-scroll">Main Title</h1>
  <p className="animate-on-scroll animate-stagger-1">Subtitle</p>
  <div className="animate-on-scroll animate-stagger-2">Feature 1</div>
  <div className="animate-on-scroll animate-stagger-3">Feature 2</div>
</div>
```

### Interactive Cards
```tsx
<Card className="
  animate-on-scroll 
  hover:scale-105 
  hover:shadow-glow 
  transition-all 
  duration-300
">
  <CardContent>Your content</CardContent>
</Card>
```

### Floating Elements
```tsx
<div className="animate-float">This will float gently</div>
<div className="animate-float" style={{animationDelay: '0.5s'}}>
  This will float with delay
</div>
```

## 🎨 CSS Custom Properties

Your animations use CSS custom properties for consistent timing:

```css
:root {
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-elegant: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-bounce: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## ♿ Accessibility

### Reduced Motion Support
Animations automatically respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States
Use the `focus-ring` class for accessible focus indicators:

```tsx
<Button className="focus-ring">Accessible button</Button>
```

## 🔧 Customization

### Adding New Animations
Extend the CSS with custom keyframes:

```css
@keyframes yourCustomAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-yourCustomAnimation {
  animation: yourCustomAnimation 0.6s ease-out;
}
```

### Tailwind Integration
Add custom animations to `tailwind.config.ts`:

```ts
keyframes: {
  'yourCustomAnimation': {
    from: { opacity: '0', transform: 'translateY(20px)' },
    to: { opacity: '1', transform: 'translateY(0)' }
  }
},
animation: {
  'yourCustomAnimation': 'yourCustomAnimation 0.6s ease-out'
}
```

## 📱 Performance Tips

1. **Use `transform` and `opacity`** for smooth 60fps animations
2. **Limit concurrent animations** to avoid overwhelming users
3. **Use `will-change`** sparingly for complex animations
4. **Test on mobile devices** to ensure smooth performance

## 🎯 Best Practices

1. **Subtle animations** enhance UX without being distracting
2. **Consistent timing** creates a cohesive feel
3. **Meaningful animations** guide user attention
4. **Performance first** - prioritize smooth 60fps animations
5. **Accessibility** - respect user motion preferences

## 🚀 Getting Started

1. **Basic animations**: Add animation classes to elements
2. **Scroll animations**: Wrap sections with `AnimatedSection`
3. **Hover effects**: Add hover classes with transition utilities
4. **Custom animations**: Extend CSS and Tailwind config as needed

Your website now has a professional, engaging feel with smooth animations that enhance user experience while maintaining accessibility and performance!
