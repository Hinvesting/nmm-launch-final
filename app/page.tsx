"use client"

import type React from "react"
import { useState } from "react"
import { Lightbulb, Bot, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const webhookUrl = "https://hook.us1.make.com/43i0zrryriegg6grhe995mveumvpwi";

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      
      alert("Thank you! Your free tool is on its way to your inbox.");
      setEmail("");
      setIsModalOpen(false);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error submitting your request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#2C3E50] text-white font-sans">
      {/* Header Logo */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-4 text-center">
          <img src="/images/logo.png" alt="New Money Millionaires L.L.C. Logo" className="h-12 mx-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stop Staring at a Blank Page. Start Generating Daily Content in 5 Minutes.
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Get our free Multi-Content Generator that uses AI to brainstorm, write, and organize a week of social media content for you. 100% Free.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F1C40F] hover:bg-[#D4AC0D] text-black font-montserrat font-bold text-lg px-12 py-6 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Get the Free Tool Now
          </Button>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
             <video
              src="/videos/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg mx-auto border-2 border-gray-600"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#F1C40F] rounded-full flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4">Endless Ideas</h3>
              <p className="font-open-sans text-gray-300 text-lg leading-relaxed">
                Generate unique angles and topics for your niche on demand.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#F1C40F] rounded-full flex items-center justify-center">
                <Bot className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4">Automated Writing</h3>
              <p className="font-open-sans text-gray-300 text-lg leading-relaxed">
                Create engaging social media copy, hashtags, and titles in seconds.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#F1C40F] rounded-full flex items-center justify-center">
                <Calendar className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4">Effortless Organization</h3>
              <p className="font-open-sans text-gray-300 text-lg leading-relaxed">
                Keep all your content perfectly organized inside a simple Google Sheet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="bg-[#34495E] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <img
                  src="/images/sam-stacks-creator.png"
                  alt="Sam Stacks - Creator"
                  className="mx-auto rounded-lg shadow-lg max-w-xs h-auto"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-montserrat text-3xl font-bold mb-6">From the Desk of Sam Stacks</h3>
                <p className="font-open-sans text-lg text-gray-200 leading-relaxed">
                  I built this tool because I know the grind of a solopreneur. Let&apos;s get you back to building your empire, not just writing posts for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-12">Your Audience is Waiting.</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F1C40F] hover:bg-[#D4AC0D] text-black font-montserrat font-bold text-lg px-12 py-6 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Download Your Free Generator
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2025 New Money Millionaires L.L.C. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#F1C40F] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F1C40F] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#2C3E50] border-[#F1C40F] text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-montserrat font-bold text-center mb-4">
              Enter Your Best Email to Receive the Multi-Content Generator
            </DialogTitle>
            <DialogClose asChild>
              <button className="absolute top-4 right-4 text-white hover:text-[#F1C40F] transition-colors">
                <X className="w-6 h-6" />
              </button>
            </DialogClose>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 h-12 text-lg focus:border-[#F1C40F] focus:ring-0"
            />
            <Button type="submit" className="w-full bg-[#F1C40F] hover:bg-[#D4AC0D] text-black font-bold text-lg py-3 h-12">
              Get My Free Generator
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}