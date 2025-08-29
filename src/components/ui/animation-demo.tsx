import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnimationDemo = () => {
  return (
    <div className="py-8 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Animation Showcase</h2>
      
      {/* Fade Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="animate-fadeInUp hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Fade In Up</CardTitle>
            <CardDescription>Elements slide up and fade in</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-fadeInUp</code> class for smooth upward animations
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fadeInDown hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Fade In Down</CardTitle>
            <CardDescription>Elements slide down and fade in</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-fadeInDown</code> class for downward animations
            </p>
          </CardContent>
        </Card>

        <Card className="animate-scaleIn hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Scale In</CardTitle>
            <CardDescription>Elements scale up from small to full size</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-scaleIn</code> class for scaling animations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Slide Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="animate-slideInLeft hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Slide In Left</CardTitle>
            <CardDescription>Elements slide in from the left</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-slideInLeft</code> class for left-to-right animations
            </p>
          </CardContent>
        </Card>

        <Card className="animate-slideInRight hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Slide In Right</CardTitle>
            <CardDescription>Elements slide in from the right</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-slideInRight</code> class for right-to-left animations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Continuous Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="animate-float hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Float</CardTitle>
            <CardDescription>Continuous floating motion</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-float</code> class for floating elements
            </p>
          </CardContent>
        </Card>

        <Card className="animate-pulse-slow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Pulse Slow</CardTitle>
            <CardDescription>Gentle pulsing effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-pulse-slow</code> class for subtle pulsing
            </p>
          </CardContent>
        </Card>

        <Card className="animate-bounceIn hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Bounce In</CardTitle>
            <CardDescription>Bouncy entrance animation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code>animate-bounceIn</code> class for bouncy effects
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Hover Effects */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Hover Effects</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="hover:scale-105 transition-transform duration-300">
            Scale Up
          </Button>
          <Button className="hover:rotate-2 transition-transform duration-300">
            Rotate
          </Button>
          <Button className="hover:translate-y-[-4px] transition-transform duration-300">
            Lift Up
          </Button>
          <Button className="hover:shadow-glow transition-all duration-300">
            Glow
          </Button>
        </div>
      </div>

      {/* Transition Classes */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Transition Classes</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="transition-smooth hover:bg-accent">
            Smooth
          </Button>
          <Button className="transition-spring hover:bg-accent">
            Spring
          </Button>
          <Button className="transition-elegant hover:bg-accent">
            Elegant
          </Button>
          <Button className="transition-bounce hover:bg-accent">
            Bounce
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemo;
