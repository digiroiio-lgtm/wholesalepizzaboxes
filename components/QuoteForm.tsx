"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const businessTypes = ["Pizzeria", "Pizza Chain", "Distributor", "Restaurant Group", "Foodservice", "Other"];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        Thank you. Our wholesale packaging team will review your request and respond within 24 hours.
      </div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="fullName">Full Name</Label><Input id="fullName" required /></div>
        <div><Label htmlFor="businessName">Business Name</Label><Input id="businessName" required /></div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
        <div><Label htmlFor="phone">Phone</Label><Input id="phone" required /></div>
        <div>
          <Label htmlFor="businessType">Business Type</Label>
          <select id="businessType" required className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm">
            {businessTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </div>
        <div><Label htmlFor="boxSize">Box Size Needed</Label><Input id="boxSize" placeholder="e.g., 12 inch / 14 inch" required /></div>
        <div><Label htmlFor="monthlyQty">Estimated Monthly Quantity</Label><Input id="monthlyQty" required /></div>
        <div>
          <Label htmlFor="customPrint">Custom Printing Needed?</Label>
          <select id="customPrint" required className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div><Label htmlFor="state">Delivery State</Label><Input id="state" required /></div>
      </div>
      {!compact && <div><Label htmlFor="message">Message</Label><Textarea id="message" /></div>}
      <p className="text-xs text-slate-600">No obligation. Fast response. Bulk pricing and custom print support.</p>
      <Button size="lg" type="submit">Get My Wholesale Quote</Button>
    </form>
  );
}
