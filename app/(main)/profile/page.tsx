"use client";

import ProfileSkeleton from "@/components/ProfileSkeleton ";
import { useUser } from "@/hooks/useUser";
import {
  Trophy,
  Pizza,
  DollarSign,
  CalendarDays,
  TrendingUp,
  Star,
} from "lucide-react";

const ProfilePage = () => {
  const { user, loading } = useUser();

  if (loading) return <ProfileSkeleton />;

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* User Card */}
        <div className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col sm:flex-row sm:items-center gap-8 border border-gray-100">
          {/* avatar */}
          <div className="flex-shrink-0">
            <div
              className="h-24 w-24 flex items-center justify-center rounded-full 
               bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow 
               text-white font-bold text-4xl shadow-lg ring-4 ring-white"
            >
              {user?.identifier?.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* details */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow bg-clip-text text-transparent">
              {user?.formData[0].value}
            </h2>
            <p className="text-gray-600">{user?.identifier}</p>

            <span
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full
             bg-white text-pizza-orange border border-pizza-orange/40 shadow-sm"
            >
              <Trophy className="w-4 h-4 text-pizza-orange" /> Premium Pizza
              Member
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow bg-clip-text text-transparent">
            Pizza Stats
          </h3>
          <p className="text-gray-600 mb-8">Your delicious achievements</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Pizza className="text-pizza-red" />
                <h4 className="font-semibold">Lifetime Orders</h4>
              </div>
              <p className="text-3xl font-extrabold text-gray-800">0</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <DollarSign className="text-pizza-orange" />
                <h4 className="font-semibold">Total Spent</h4>
              </div>
              <p className="text-3xl font-extrabold text-gray-800">$0.00</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-pizza-yellow" />
                <h4 className="font-semibold">This Year</h4>
              </div>
              <p className="text-sm text-gray-500">0 orders</p>
              <p className="text-xl font-bold text-gray-800">$0.00 spent</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-pizza-red" />
                <h4 className="font-semibold">This Month</h4>
              </div>
              <p className="text-sm text-gray-500">0 orders</p>
              <p className="text-xl font-bold text-gray-800">$0.00 spent</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-14 bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-pizza-orange" />
            <h3 className="text-2xl font-semibold">Status</h3>
          </div>
          <p className="font-medium text-lg">Pizza Starter</p>
          <p className="text-gray-500 text-sm">10 more orders to Master</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
