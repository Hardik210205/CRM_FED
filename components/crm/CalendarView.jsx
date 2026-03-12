"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

export default function CalendarView() {
  const [currentDate] = useState(new Date(2023, 9, 24));
  const today = 24;
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevDays - i, current: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ day: i, current: true });
  }
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push({ day: i, current: false });
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">{monthName} {year}</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0">
        {daysOfWeek.map((d) => (
          <div key={d} className="text-center text-[10px] font-medium text-muted-foreground py-1">{d}</div>
        ))}
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`text-center py-1.5 text-xs cursor-pointer rounded transition-colors ${
              !cell.current ? "text-muted-foreground/40" : cell.day === today ? "bg-primary text-primary-foreground font-semibold" : "text-foreground hover:bg-muted"
            }`}
          >
            {cell.day}
          </div>
        ))}
      </div>
    </div>
  );
}
