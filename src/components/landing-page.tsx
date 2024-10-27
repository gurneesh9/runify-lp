"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Cloud,
  Code,
  Zap,
  FileJson,
  CheckCircle,
  Copy,
  Terminal,
  Rocket,
} from "lucide-react";

import { AnimatedRocket } from "@/components/animated-rocket";

// Removed Stars and LaunchingRocket components

export function LandingPageComponent() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "curl -sSL https://raw.githubusercontent.com/gurneesh9/cloudrunify/refs/heads/main/install.sh | bash",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen subtle-gradient max-w-screen-2xl mx-auto">
      <header className="px-4 sm:px-6 lg:px-8 h-16 flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <Link className="flex items-center justify-center" href="#">
          <Cloud className="h-6 w-6 text-purple-500" />
          <span className="ml-2 text-lg font-bold text-purple-700 dark:text-purple-300">
            Cloud Runify
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-purple-500 dark:hover:text-purple-300"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-500 dark:hover:text-purple-300"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-500 dark:hover:text-purple-300"
            href="#comparison"
          >
            Why Cloud Runify
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        <section className="relative w-full py-12 pb-32 md:py-24 md:pb-48 lg:py-32 lg:pb-64 xl:py-48 xl:pb-80 overflow-hidden hero-gradient">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center relative z-10">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-800 dark:text-purple-200">
                  Simplify Your GCP Cloud Run Deployments
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  Deploy to GCP Cloud Run declaratively using simple YAML.
                  Streamline your workflow with Cloud Runify.
                </p>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="space-x-4">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-300">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                    onClick={() =>
                      window.open(
                        "https://github.com/gurneesh9/cloudrunify",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors duration-300"
                      >
                        Install Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] p-6">
                      <DialogHeader>
                        <DialogTitle>Install Cloud Runify</DialogTitle>
                        <DialogDescription>
                          Run this command to install Cloud Runify on your
                          system:
                        </DialogDescription>
                      </DialogHeader>
                      <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg flex justify-between items-center gap-4 border border-gray-200 dark:border-gray-700">
                        <code className="text-sm font-mono whitespace-pre-wrap break-all text-gray-800 dark:text-gray-200">
                          curl -sSL
                          https://raw.githubusercontent.com/gurneesh9/cloudrunify/refs/heads/main/install.sh
                          | bash
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyToClipboard}
                        >
                          {copied ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <AnimatedRocket className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mt-8" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-gray-800/80 dark:to-gray-800" />
        </section>
        <section
          id="features"
          className="relative w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-700 dark:text-purple-300">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 scale-on-hover hover-float">
                <Code className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                  Declarative YAML
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Define your deployments using simple, readable YAML files.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-pink-100 to-blue-100 dark:from-pink-900 dark:to-blue-900 rounded-lg shadow-md">
                <Zap className="h-12 w-12 mb-4 text-pink-500" />
                <h3 className="text-xl font-bold mb-2 text-pink-700 dark:text-pink-300">
                  Fast Deployments
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quickly deploy your applications to GCP Cloud Run.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg shadow-md">
                <FileJson className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                  Version Control
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily manage and version your deployment configurations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-800 dark:text-purple-200">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                  Write Your YAML
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create a simple YAML file describing your Cloud Run
                  deployment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2 text-pink-700 dark:text-pink-300">
                  Run cloudrunify
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Execute our cloudrunify tool with your YAML file as input.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                  Deploy to Cloud Run
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your application is automatically deployed to GCP Cloud Run.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="comparison"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-700 dark:text-purple-300">
              Why Choose Cloud Runify
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg shadow-md">
                <Terminal className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                  Simpler than gcloud
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No need to remember complex gcloud commands. Our YAML-based
                  approach is intuitive and easy to learn.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-pink-100 to-blue-100 dark:from-pink-900 dark:to-blue-900 rounded-lg shadow-md">
                <FileJson className="h-12 w-12 mb-4 text-pink-500" />
                <h3 className="text-xl font-bold mb-2 text-pink-700 dark:text-pink-300">
                  Lighter than Terraform
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For simple apps, Terraform can be overkill. Cloud Runify
                  offers a streamlined solution for Cloud Run deployments.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br  from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg shadow-md">
                <Rocket className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                  Tailored for Cloud Run
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Purpose-built for GCP Cloud Run, offering a focused and
                  efficient deployment experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-800 dark:text-purple-200">
                  Ready to Simplify Your Deployments?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  Start deploying to GCP Cloud Run with ease. Try Cloud Runify
                  today and experience the power of declarative deployments.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white dark:bg-gray-700"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-purple-500 dark:hover:text-purple-300"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 sm:px-6 lg:px-8 border-t bg-white dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Cloud Runify. All rights reserved.
          </p>
          <span className="hidden sm:inline text-gray-400">•</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Made with <span className="text-red-500">❤️</span> by Gurneesh using{" "}
            <span className="font-mono text-blue-500">TypeScript</span> and{" "}
            <span className="font-mono text-purple-500">Bun</span>
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-300"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-300"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
