import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Terminal, Users, MessageSquare } from "lucide-react";

export const EditorPreview = () => {
  const [activeTab, setActiveTab] = useState("editor");

  const codeExample = `// Real-time collaborative editing
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Live cursor from teammate Alice
console.log(fibonacci(10)); // Output: 55

// Your teammate Bob is typing...`;

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See It In{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of real-time collaboration with our 
            intuitive code editor interface.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Editor Interface Mockup */}
          <div className="bg-editor-bg rounded-xl border border-editor-border shadow-large overflow-hidden">
            {/* Editor Header */}
            <div className="bg-editor-bg border-b border-editor-border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-editor-foreground font-medium">main.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-editor-foreground">Alice</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-editor-foreground">Bob</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-editor-foreground">You</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex h-96">
              {/* Code Editor */}
              <div className="flex-1 p-4">
                <pre className="text-editor-foreground text-sm leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
              </div>

              {/* Sidebar */}
              <div className="w-80 bg-editor-bg border-l border-editor-border">
                {/* Tab Navigation */}
                <div className="flex border-b border-editor-border">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-1 p-3 text-sm font-medium ${
                      activeTab === "chat"
                        ? "text-primary border-b-2 border-primary"
                        : "text-editor-foreground hover:text-primary"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Chat
                  </button>
                  <button
                    onClick={() => setActiveTab("collaborators")}
                    className={`flex-1 p-3 text-sm font-medium ${
                      activeTab === "collaborators"
                        ? "text-primary border-b-2 border-primary"
                        : "text-editor-foreground hover:text-primary"
                    }`}
                  >
                    <Users className="w-4 h-4 inline mr-2" />
                    Team
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-4">
                  {activeTab === "chat" && (
                    <div className="space-y-3">
                      <div className="text-xs text-muted-foreground mb-2">Today</div>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium text-green-400">Alice:</span>
                          <span className="text-editor-foreground ml-2">
                            Great optimization on the fibonacci function!
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-blue-400">Bob:</span>
                          <span className="text-editor-foreground ml-2">
                            Should we add memoization for better performance?
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-primary">You:</span>
                          <span className="text-editor-foreground ml-2">
                            Good idea! Let me implement that...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "collaborators" && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-editor-border/20">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          A
                        </div>
                        <div>
                          <div className="text-sm font-medium text-editor-foreground">Alice Johnson</div>
                          <div className="text-xs text-muted-foreground">Lead Developer</div>
                        </div>
                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-editor-border/20">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          B
                        </div>
                        <div>
                          <div className="text-sm font-medium text-editor-foreground">Bob Smith</div>
                          <div className="text-xs text-muted-foreground">Frontend Engineer</div>
                        </div>
                        <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Terminal/Output */}
            <div className="bg-editor-border/30 border-t border-editor-border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-editor-foreground" />
                  <span className="text-sm font-medium text-editor-foreground">Output</span>
                </div>
                <Button variant="ghost" size="sm" className="text-editor-foreground hover:text-primary">
                  <Play className="w-4 h-4 mr-1" />
                  Run
                </Button>
              </div>
              <div className="text-sm text-green-400 font-mono">
                55
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};