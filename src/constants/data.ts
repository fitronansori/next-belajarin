export const nav_links = [
  {
    id: 1,
    title: "Beranda",
    href: "/",
  },
  {
    id: 2,
    title: "Kelas",
    href: "/courses",
  },
  {
    id: 3,
    title: "Mentor",
    href: "/mentors",
  },
];

import { Home, SquarePlus, Star, Shapes, Users, User } from "lucide-react";

export const dashboardItems = [
  {
    title: "Admin Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Buat Kelas",
    url: "/dashboard/create-course",
    icon: SquarePlus,
  },
  {
    title: "Semua Mentor",
    url: "/dashboard/mentors",
    icon: Star,
  },
  {
    title: "Semua Kelas",
    url: "/dashboard/courses",
    icon: Shapes,
  },
  {
    title: "Semua Siswa",
    url: "/dashboard/all-students",
    icon: Users,
  },
  {
    title: "Akun Saya",
    url: "/profile",
    icon: User,
  },
];

export const dashboardTeacherItems = [
  {
    title: "Mentor Home",
    url: "/dashboard/teacher",
    icon: Home,
  },
  {
    title: "Buat Kelas",
    url: "/dashboard/teacher/create-course",
    icon: SquarePlus,
  },
  {
    title: "Kelas Saya",
    url: "/dashboard/teacher/my-courses",
    icon: Shapes,
  },
  {
    title: "Siswa Saya",
    url: "/dashboard/teacher/my-students",
    icon: Users,
  },
  {
    title: "Akun Saya",
    url: "/profile",
    icon: User,
  },
];

export const dashboardStudentItems = [
  {
    title: "Siswa Home",
    url: "/dashboard/student",
    icon: Home,
  },
  {
    title: "Kelas Saya",
    url: "/dashboard/student/my-courses",
    icon: Shapes,
  },
  {
    title: "Akun Saya",
    url: "/profile",
    icon: User,
  },
];

export const filter_options = {
  category: [
    { _value: "all", _label: "Semua Kategori" },
    { _value: "web", _label: "Web Development" },
    { _value: "mobile", _label: "Mobile Development" },
    { _value: "design", _label: "UI/UX Design" },
    { _value: "data", _label: "Data Science" },
  ],
  level: [
    { _value: "all", _label: "Semua Level" },
    { _value: "beginner", _label: "Beginner" },
    { _value: "intermediate", _label: "Intermediate" },
    { _value: "advanced", _label: "Advanced" },
  ],
  price: [
    { _value: "all", _label: "Semua Harga" },
    { _value: "free", _label: "Gratis" },
    { _value: "paid", _label: "Berbayar" },
  ],
};
