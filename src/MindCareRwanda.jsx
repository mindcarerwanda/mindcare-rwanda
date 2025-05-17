import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function MindCareRwanda() {
  return (
    <main className="bg-green-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="p-6 border-b border-green-700">
        <h1 className="text-3xl font-bold">MindCare Rwanda</h1>
        <p className="text-sm text-green-300">Empowering mental wellness for all</p>
      </header>

      {/* Navigation */}
      <nav className="p-4 flex gap-4 bg-green-800 border-b border-green-700">
        <a href="#about" className="hover:underline">About Us</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#blog" className="hover:underline">Blog</a>
        <a href="#contact" className="hover:underline">Contact Us</a>
        <a href="#language" className="ml-auto">EN / RW</a>
      </nav>

      {/* Hero Section */}
      <section className="p-8 text-center bg-green-950">
        <h2 className="text-4xl font-semibold mb-4">Your Path to Mental Wellbeing</h2>
        <p className="text-green-300 max-w-2xl mx-auto">
          Access trusted mental health resources, book therapy sessions, and get the support you deserve — in English or Kinyarwanda.
        </p>
      </section>

      {/* About Us */}
      <section id="about" className="p-8 bg-green-900">
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="text-green-200 max-w-3xl">
          MindCare Rwanda is a national initiative committed to providing accessible, culturally sensitive, and affordable mental health care. Our platform bridges communities and professionals, helping Rwandans manage their mental wellness every day.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="p-8 bg-green-950">
        <h3 className="text-2xl font-bold mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-green-800">
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">Mental Health Resources</h4>
              <p className="text-green-200">Access articles, videos, and self-care guides tailored for Rwandans.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800">
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">Book Therapy</h4>
              <p className="text-green-200">Schedule a session with a licensed mental health professional in your preferred language.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800">
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">Community Support</h4>
              <p className="text-green-200">Connect with peer support groups and community events focused on wellness.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="p-8 bg-green-900">
        <h3 className="text-2xl font-bold mb-6">Latest from Our Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-green-800">
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">5 Ways to Manage Anxiety</h4>
              <p className="text-green-200">Learn practical strategies you can start using today to reduce stress and anxiety levels.</p>
              <Button variant="link" className="text-green-300 px-0">Read more</Button>
            </CardContent>
          </Card>
          <Card className="bg-green-800">
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">Community Healing in Rwanda</h4>
              <p className="text-green-200">How local communities are fostering collective mental well-being after trauma.</p>
              <Button variant="link" className="text-green-300 px-0">Read more</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="p-8 bg-green-950">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <form className="max-w-xl space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" rows={5} />
          <Button type="submit" className="bg-green-700 hover:bg-green-600">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-green-400 bg-green-900 border-t border-green-700">
        &copy; 2025 MindCare Rwanda. All rights reserved.
      </footer>
    </main>
  );
}