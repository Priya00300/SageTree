import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Book, BrainCircuit, Globe, Lightbulb, MessageSquare, Users } from "lucide-react"
import Link from 'next/link'

export default function SageTreeWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">SageTree</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">About Us</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features">Features</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#pathways">Learning Pathways</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#community">Community</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#blog">Blog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button>Sign In</Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold mb-6">Your Personalized Path to Tech Success</h1>
            <p className="text-xl mb-8">AI-driven learning tailored to your goals and skills</p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: BrainCircuit, title: "Personalized Learning Paths" },
                { icon: Globe, title: "Multi-Language Support" },
                { icon: Users, title: "Global Job Matching" },
                { icon: MessageSquare, title: "Mentorship & Community" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-orange-500 p-4 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Vision & Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At SageTree, we're committed to making tech learning accessible, personalized, and effective for everyone. Our AI-driven platform adapts to your unique learning style and career goals, ensuring you stay ahead in the ever-evolving tech landscape.
                </p>
                <p className="text-lg text-gray-700">
                  We believe in the power of continuous learning and global collaboration. Join our community of learners and mentors from around the world, and unlock your full potential in the tech industry.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="C:\Users\User\Downloads\download.png" alt="AI Learning Tree" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Features & Services Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Features & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BrainCircuit, title: "AI-Generated Learning Tree" },
                { icon: Users, title: "Collaborative Learning Labs" },
                { icon: Globe, title: "Global Competitions" },
                { icon: Lightbulb, title: "Adaptive AI Models" },
                { icon: ArrowRight, title: "Job Matching" },
                { icon: Book, title: "Continuous Learning Certifications" }
              ].map((feature, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <CardHeader>
                    <div className="bg-green-400 p-3 rounded-full w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-blue-600">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Pathways Section */}
        <section id="pathways" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Your Learning Journey</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="frontend">Frontend Development</TabsTrigger>
                  <TabsTrigger value="backend">Backend Development</TabsTrigger>
                  <TabsTrigger value="data">Data Science</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-blue-600">Frontend Development Path</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-orange-500">HTML & CSS</Badge>
                    <Badge className="bg-green-400">JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Vue.js</Badge>
                    <Badge>Angular</Badge>
                    <Badge className="bg-blue-600">UI/UX Design</Badge>
                  </div>
                  <p className="text-gray-600">Master the art of creating beautiful and interactive user interfaces. Start with the basics and progress to advanced frameworks and design principles.</p>
                </TabsContent>
                <TabsContent value="backend" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-blue-600">Backend Development Path</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge>Node.js</Badge>
                    <Badge className="bg-green-400">Python</Badge>
                    <Badge>Java</Badge>
                    <Badge className="bg-orange-500">Databases</Badge>
                    <Badge>API Design</Badge>
                    <Badge className="bg-blue-600">Cloud Services</Badge>
                  </div>
                  <p className="text-gray-600">Build robust and scalable server-side applications. Learn popular languages, database management, and cloud deployment strategies.</p>
                </TabsContent>
                <TabsContent value="data" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-blue-600">Data Science Path</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-orange-500">Statistics</Badge>
                    <Badge className="bg-green-400">Machine Learning</Badge>
                    <Badge>Python</Badge>
                    <Badge>R</Badge>
                    <Badge className="bg-blue-600">Big Data</Badge>
                    <Badge>Data Visualization</Badge>
                  </div>
                  <p className="text-gray-600">Unlock insights from complex datasets. Dive into statistical analysis, machine learning algorithms, and data visualization techniques.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Join Our Global Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Success Stories</h3>
                <div className="space-y-6">
                  {[
                    { name: "Sarah L.", role: "Frontend Developer", company: "Tech Innovators Inc." },
                    { name: "Michael R.", role: "Data Scientist", company: "AI Solutions Ltd." },
                    { name: "Elena K.", role: "Full Stack Engineer", company: "Global Systems Corp." }
                  ].map((story, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/40?img=${index + 1}`} />
                        <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{story.name}</p>
                        <p className="text-sm text-gray-600">{story.role} at {story.company}</p>
                        <p className="mt-1 text-sm">
                          "SageTree helped me transition into my dream role. The personalized learning path and mentor support were invaluable."
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Connect with Mentors</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Chat with Industry Experts</CardTitle>
                    <CardDescription>Get guidance from experienced professionals in your field of interest.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="https://i.pravatar.cc/40?img=4" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="bg-blue-100 rounded-lg p-2 flex-1">
                          <p className="text-sm">Hi there! How can I help you with your tech career today?</p>
                        </div>
                      </div>
                      <Input placeholder="Type your message here..." />
                      <Button className="w-full">Send Message</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Blog & Resources Section */}
        <section id="blog" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Latest from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "The Future of AI in Education", category: "Technology Trends" },
                { title: "5 Essential Skills for Full Stack Developers", category: "Career Advice" },
                { title: "Understanding Big Data: A Beginner's Guide", category: "Data Science" }
              ].map((post, index) => (
                <Card key={index}>
                  <img src={`/placeholder.svg?height=200&width=400&text=Blog+Image+${index + 1}`} alt={post.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SageTree</h3>
              <p className="text-sm">Empowering tech learners worldwide with  AI-driven personalized education.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#about" className="hover:underline">About Us</Link></li>
                <li><Link href="#features" className="hover:underline">Features</Link></li>
                <li><Link href="#community" className="hover:underline">Community</Link></li>
                <li><Link href="#blog" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-sm">Email: info@sagetree.com</p>
              <p className="text-sm">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500 text-center">
            <p className="text-sm">&copy; 2024 SageTree. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}