"use client";

import ActivityButton from "./activity-button";
import CardWrapper from "./card-wrapper";

export function Page() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Control Panel */}
      <div className="w-16 bg-white shadow-md">
        <ActivityButton icon="home" active />
        <ActivityButton icon="search" />
        <ActivityButton icon="settings" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <CardWrapper
          title="Popular Destinations"
          cards={[
            {
              id: 1,
              title: "Paris",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 2,
              title: "Tokyo",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 3,
              title: "New York",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 4,
              title: "London",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 5,
              title: "Rome",
              image: "/placeholder.svg?height=200&width=300",
            },
          ]}
        />
        <CardWrapper
          title="Trending Experiences"
          cards={[
            {
              id: 1,
              title: "Cooking Class",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 2,
              title: "Wine Tasting",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 3,
              title: "Surfing Lesson",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 4,
              title: "Yoga Retreat",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 5,
              title: "Hiking Adventure",
              image: "/placeholder.svg?height=200&width=300",
            },
          ]}
        />
      </div>
    </div>
  );
}
