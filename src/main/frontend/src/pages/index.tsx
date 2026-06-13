import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, Info, Bell, Settings } from "lucide-react";

export default function HomePage() {
  const [date, setDate] = React.useState(new Date());
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pnpm create vrrtts").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset text after 2 seconds
    });
  };

  return (
    <div className="mx-auto px-4 py-10 container">
      <div className="flex flex-col items-center mb-10">
        <h1 className="mb-2 font-bold text-2xl md:text-4xl">
          vite-react-router-tailwind-typescript-shadcn
        </h1>
        <p className="mb-6 text-gray-500">
          A simple, clean and lightning fast template for a Vite/React
          application with file-based routing, tailwindcss 4, typescript and
          Shadcn UI.
        </p>
        <div className="flex flex-col gap-2 mb-8 text-center">
          <h2 className="font-bold text-lg">Installation</h2>
          <p>
            <pre
              className="bg-gray-900 p-2 rounded-md text-white cursor-pointer"
              onClick={handleCopy}
            >
              <code>{copySuccess ? "Copied!" : "pnpm create vrrtts"}</code>
            </pre>
          </p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-blue-50">
            Modern
          </Badge>
          <Badge variant="outline" className="bg-green-50">
            Accessible
          </Badge>
          <Badge variant="outline" className="bg-purple-50">
            Customizable
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="basics" className="mb-10 w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="basics">Basic UI</TabsTrigger>
          <TabsTrigger value="forms">Form Elements</TabsTrigger>
          <TabsTrigger value="dialogs">Dialogs & Menus</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="mt-6">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Buttons Card */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Various button styles and states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CardContent>
            </Card>

            {/* Badges Card */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Informative small tags</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-blue-500">Custom</Badge>
                  <Badge className="bg-green-500">Success</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cards Card */}
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Containers for content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Nested Card Example</h3>
                  <p className="text-gray-500 text-sm">
                    Cards can contain any content
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  Cancel
                </Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forms" className="mt-6">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Input Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Input Controls</CardTitle>
                <CardDescription>Text inputs and variants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="font-medium text-sm">Standard Input</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm">Disabled Input</label>
                  <Input disabled placeholder="Disabled input" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm">With Icon</label>
                  <div className="relative">
                    <Input placeholder="Search..." className="pl-8" />
                    <div className="left-2 absolute inset-y-0 flex items-center">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select & Dropdowns */}
            <Card>
              <CardHeader>
                <CardTitle>Select & Dropdowns</CardTitle>
                <CardDescription>Selection controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="font-medium text-sm">Basic Select</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm">Switch</label>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <label htmlFor="airplane-mode">Airplane Mode</label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders & Range */}
            <Card>
              <CardHeader>
                <CardTitle>Sliders & Range</CardTitle>
                <CardDescription>Range selection controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="font-medium text-sm">Basic Slider</label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm">Range Slider</label>
                  <Slider defaultValue={[25, 75]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dialogs" className="mt-6">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Alert Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Dialog</CardTitle>
                <CardDescription>Confirmation dialogs</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Show Alert Dialog</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            {/* Dropdown Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>Context menus for actions</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Informative messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="w-4 h-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert for the user.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>Collapsible content sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the other
                      components.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Date picker component</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    if (selectedDate) {
                      setDate(selectedDate);
                    }
                  }}
                  className="border rounded-md"
                />
              </CardContent>
            </Card>

            {/* Icons */}
            <Card>
              <CardHeader>
                <CardTitle>Lucide Icons</CardTitle>
                <CardDescription>Beautiful icons included</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="gap-4 grid grid-cols-4">
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <span className="mt-1 text-xs">Check</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Info className="w-8 h-8 text-blue-500" />
                    <span className="mt-1 text-xs">Info</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bell className="w-8 h-8 text-yellow-500" />
                    <span className="mt-1 text-xs">Bell</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Settings className="w-8 h-8 text-gray-500" />
                    <span className="mt-1 text-xs">Settings</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="mt-10 pt-6 border-t text-gray-500 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Jay Simons</p>
      </footer>
    </div>
  );
}
