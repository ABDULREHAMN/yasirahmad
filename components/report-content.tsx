"use client"
import { useState } from "react"
import { Download, Filter, RefreshCw, BarChart2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const reportData = {
  "Last 7 Days": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 17, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 16, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 15, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 14, 2026", impressions: "324", clicks: "11", ctr: "3.40%", ecpm: "$3.70", revenue: "$1.20" },
        { date: "Jun 13, 2026", impressions: "231", clicks: "9", ctr: "3.90%", ecpm: "$5.19", revenue: "$1.20" },
        { date: "Jun 12, 2026", impressions: "6783", clicks: "237", ctr: "3.49%", ecpm: "$65.33", revenue: "$22.90" },
        { date: "Jun 11, 2026", impressions: "6663", clicks: "223", ctr: "3.35%", ecpm: "$61.05", revenue: "$21.50" },
      ],
      Desktop: [
        { date: "Jun 17, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 16, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 15, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 14, 2026", impressions: "227", clicks: "8", ctr: "3.52%", ecpm: "$3.70", revenue: "$0.84" },
        { date: "Jun 13, 2026", impressions: "162", clicks: "6", ctr: "3.70%", ecpm: "$5.19", revenue: "$0.84" },
        { date: "Jun 12, 2026", impressions: "4748", clicks: "166", ctr: "3.49%", ecpm: "$65.33", revenue: "$16.03" },
        { date: "Jun 11, 2026", impressions: "4664", clicks: "156", ctr: "3.34%", ecpm: "$61.05", revenue: "$15.05" },
      ],
      Mobile: [
        { date: "Jun 17, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 16, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 15, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 14, 2026", impressions: "97", clicks: "3", ctr: "3.09%", ecpm: "$3.70", revenue: "$0.36" },
        { date: "Jun 13, 2026", impressions: "69", clicks: "3", ctr: "4.35%", ecpm: "$5.19", revenue: "$0.36" },
        { date: "Jun 12, 2026", impressions: "2035", clicks: "71", ctr: "3.49%", ecpm: "$65.33", revenue: "$6.87" },
        { date: "Jun 11, 2026", impressions: "1999", clicks: "67", ctr: "3.35%", ecpm: "$61.05", revenue: "$6.45" },
      ],
    },
  },
  "Last 30 Days": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 17, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 16, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 15, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 14, 2026", impressions: "324", clicks: "11", ctr: "3.40%", ecpm: "$3.70", revenue: "$1.20" },
        { date: "Jun 13, 2026", impressions: "231", clicks: "9", ctr: "3.90%", ecpm: "$5.19", revenue: "$1.20" },
        { date: "Jun 12, 2026", impressions: "6783", clicks: "237", ctr: "3.49%", ecpm: "$65.33", revenue: "$22.90" },
        { date: "Jun 11, 2026", impressions: "6663", clicks: "223", ctr: "3.35%", ecpm: "$61.05", revenue: "$21.50" },
        { date: "Jun 10, 2026", impressions: "6543", clicks: "210", ctr: "3.21%", ecpm: "$56.77", revenue: "$20.11" },
        { date: "Jun 9, 2026", impressions: "6564", clicks: "243", ctr: "3.70%", ecpm: "$67.43", revenue: "$21.98" },
        { date: "Jun 8, 2026", impressions: "6527", clicks: "241", ctr: "3.69%", ecpm: "$66.38", revenue: "$21.54" },
        { date: "Jun 7, 2026", impressions: "6486", clicks: "239", ctr: "3.69%", ecpm: "$65.21", revenue: "$21.26" },
        { date: "Jun 6, 2026", impressions: "6428", clicks: "236", ctr: "3.67%", ecpm: "$63.75", revenue: "$21.03" },
        { date: "Jun 5, 2026", impressions: "6379", clicks: "234", ctr: "3.67%", ecpm: "$62.18", revenue: "$20.79" },
        { date: "Jun 4, 2026", impressions: "6324", clicks: "231", ctr: "3.65%", ecpm: "$60.82", revenue: "$20.57" },
        { date: "Jun 3, 2026", impressions: "6278", clicks: "229", ctr: "3.65%", ecpm: "$59.16", revenue: "$20.38" },
        { date: "Jun 2, 2026", impressions: "6225", clicks: "226", ctr: "3.63%", ecpm: "$57.84", revenue: "$20.21" },
        { date: "Jun 1, 2026", impressions: "6182", clicks: "224", ctr: "3.62%", ecpm: "$56.22", revenue: "$19.99" },
      ],
      Desktop: [
        { date: "Jun 17, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 16, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 15, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 14, 2026", impressions: "227", clicks: "8", ctr: "3.52%", ecpm: "$3.70", revenue: "$0.84" },
        { date: "Jun 13, 2026", impressions: "162", clicks: "6", ctr: "3.70%", ecpm: "$5.19", revenue: "$0.84" },
        { date: "Jun 12, 2026", impressions: "4748", clicks: "166", ctr: "3.49%", ecpm: "$65.33", revenue: "$16.03" },
        { date: "Jun 11, 2026", impressions: "4664", clicks: "156", ctr: "3.34%", ecpm: "$61.05", revenue: "$15.05" },
        { date: "Jun 10, 2026", impressions: "4580", clicks: "147", ctr: "3.21%", ecpm: "$56.77", revenue: "$14.08" },
        { date: "Jun 9, 2026", impressions: "4595", clicks: "170", ctr: "3.70%", ecpm: "$67.43", revenue: "$15.38" },
        { date: "Jun 8, 2026", impressions: "4569", clicks: "169", ctr: "3.70%", ecpm: "$66.38", revenue: "$15.08" },
        { date: "Jun 7, 2026", impressions: "4540", clicks: "167", ctr: "3.68%", ecpm: "$65.21", revenue: "$14.88" },
        { date: "Jun 6, 2026", impressions: "4500", clicks: "165", ctr: "3.67%", ecpm: "$63.75", revenue: "$14.72" },
        { date: "Jun 5, 2026", impressions: "4465", clicks: "163", ctr: "3.65%", ecpm: "$62.18", revenue: "$14.55" },
        { date: "Jun 4, 2026", impressions: "4427", clicks: "161", ctr: "3.64%", ecpm: "$60.82", revenue: "$14.40" },
        { date: "Jun 3, 2026", impressions: "4395", clicks: "160", ctr: "3.64%", ecpm: "$59.16", revenue: "$14.27" },
        { date: "Jun 2, 2026", impressions: "4358", clicks: "158", ctr: "3.63%", ecpm: "$57.84", revenue: "$14.14" },
        { date: "Jun 1, 2026", impressions: "4327", clicks: "156", ctr: "3.61%", ecpm: "$56.22", revenue: "$13.99" },
      ],
      Mobile: [
        { date: "Jun 17, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 16, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 15, 2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
        { date: "Jun 14, 2026", impressions: "97", clicks: "3", ctr: "3.09%", ecpm: "$3.70", revenue: "$0.36" },
        { date: "Jun 13, 2026", impressions: "69", clicks: "3", ctr: "4.35%", ecpm: "$5.19", revenue: "$0.36" },
        { date: "Jun 12, 2026", impressions: "2035", clicks: "71", ctr: "3.49%", ecpm: "$65.33", revenue: "$6.87" },
        { date: "Jun 11, 2026", impressions: "1999", clicks: "67", ctr: "3.35%", ecpm: "$61.05", revenue: "$6.45" },
        { date: "Jun 10, 2026", impressions: "1963", clicks: "63", ctr: "3.21%", ecpm: "$56.77", revenue: "$6.03" },
        { date: "Jun 9, 2026", impressions: "1969", clicks: "73", ctr: "3.71%", ecpm: "$67.43", revenue: "$6.60" },
        { date: "Jun 8, 2026", impressions: "1958", clicks: "72", ctr: "3.68%", ecpm: "$66.38", revenue: "$6.46" },
        { date: "Jun 7, 2026", impressions: "1946", clicks: "72", ctr: "3.70%", ecpm: "$65.21", revenue: "$6.38" },
        { date: "Jun 6, 2026", impressions: "1928", clicks: "71", ctr: "3.68%", ecpm: "$63.75", revenue: "$6.31" },
        { date: "Jun 5, 2026", impressions: "1914", clicks: "71", ctr: "3.71%", ecpm: "$62.18", revenue: "$6.24" },
        { date: "Jun 4, 2026", impressions: "1897", clicks: "70", ctr: "3.69%", ecpm: "$60.82", revenue: "$6.17" },
        { date: "Jun 3, 2026", impressions: "1883", clicks: "69", ctr: "3.66%", ecpm: "$59.16", revenue: "$6.11" },
        { date: "Jun 2, 2026", impressions: "1867", clicks: "68", ctr: "3.64%", ecpm: "$57.84", revenue: "$6.07" },
        { date: "Jun 1, 2026", impressions: "1855", clicks: "68", ctr: "3.66%", ecpm: "$56.22", revenue: "$6.00" },
      ],
    },
  },
  "Last 3 Months": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 9, 2026", impressions: "6564", clicks: "243", ctr: "3.70%", ecpm: "$67.43", revenue: "$21.98" },
        { date: "Jun 8, 2026", impressions: "6527", clicks: "241", ctr: "3.69%", ecpm: "$66.38", revenue: "$21.54" },
        { date: "Jun 7, 2026", impressions: "6486", clicks: "239", ctr: "3.69%", ecpm: "$65.21", revenue: "$21.26" },
        { date: "Jun 6, 2026", impressions: "6428", clicks: "236", ctr: "3.67%", ecpm: "$63.75", revenue: "$21.03" },
        { date: "Jun 5, 2026", impressions: "6379", clicks: "234", ctr: "3.67%", ecpm: "$62.18", revenue: "$20.79" },
        { date: "Jun 4, 2026", impressions: "6324", clicks: "231", ctr: "3.65%", ecpm: "$60.82", revenue: "$20.57" },
        { date: "Jun 3, 2026", impressions: "6278", clicks: "229", ctr: "3.65%", ecpm: "$59.16", revenue: "$20.38" },
        { date: "Jun 2, 2026", impressions: "6225", clicks: "226", ctr: "3.63%", ecpm: "$57.84", revenue: "$20.21" },
        { date: "Jun 1, 2026", impressions: "6182", clicks: "224", ctr: "3.62%", ecpm: "$56.22", revenue: "$19.99" },
      ],
      Desktop: [
        { date: "Jun 9, 2026", impressions: "4595", clicks: "170", ctr: "3.70%", ecpm: "$67.43", revenue: "$15.38" },
        { date: "Jun 8, 2026", impressions: "4569", clicks: "169", ctr: "3.70%", ecpm: "$66.38", revenue: "$15.08" },
        { date: "Jun 7, 2026", impressions: "4540", clicks: "167", ctr: "3.68%", ecpm: "$65.21", revenue: "$14.88" },
        { date: "Jun 6, 2026", impressions: "4500", clicks: "165", ctr: "3.67%", ecpm: "$63.75", revenue: "$14.72" },
        { date: "Jun 5, 2026", impressions: "4465", clicks: "163", ctr: "3.65%", ecpm: "$62.18", revenue: "$14.55" },
        { date: "Jun 4, 2026", impressions: "4427", clicks: "161", ctr: "3.64%", ecpm: "$60.82", revenue: "$14.40" },
        { date: "Jun 3, 2026", impressions: "4395", clicks: "160", ctr: "3.64%", ecpm: "$59.16", revenue: "$14.27" },
        { date: "Jun 2, 2026", impressions: "4358", clicks: "158", ctr: "3.63%", ecpm: "$57.84", revenue: "$14.14" },
        { date: "Jun 1, 2026", impressions: "4327", clicks: "156", ctr: "3.61%", ecpm: "$56.22", revenue: "$13.99" },
      ],
      Mobile: [
        { date: "Jun 9, 2026", impressions: "1969", clicks: "73", ctr: "3.71%", ecpm: "$67.43", revenue: "$6.60" },
        { date: "Jun 8, 2026", impressions: "1958", clicks: "72", ctr: "3.68%", ecpm: "$66.38", revenue: "$6.46" },
        { date: "Jun 7, 2026", impressions: "1946", clicks: "72", ctr: "3.70%", ecpm: "$65.21", revenue: "$6.38" },
        { date: "Jun 6, 2026", impressions: "1928", clicks: "71", ctr: "3.68%", ecpm: "$63.75", revenue: "$6.31" },
        { date: "Jun 5, 2026", impressions: "1914", clicks: "71", ctr: "3.71%", ecpm: "$62.18", revenue: "$6.24" },
        { date: "Jun 4, 2026", impressions: "1897", clicks: "70", ctr: "3.69%", ecpm: "$60.82", revenue: "$6.17" },
        { date: "Jun 3, 2026", impressions: "1883", clicks: "69", ctr: "3.66%", ecpm: "$59.16", revenue: "$6.11" },
        { date: "Jun 2, 2026", impressions: "1867", clicks: "68", ctr: "3.64%", ecpm: "$57.84", revenue: "$6.07" },
        { date: "Jun 1, 2026", impressions: "1855", clicks: "68", ctr: "3.66%", ecpm: "$56.22", revenue: "$6.00" },
      ],
    },
  },
  "Last 6 Months": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 9, 2026", impressions: "6564", clicks: "243", ctr: "3.70%", ecpm: "$67.43", revenue: "$21.98" },
        { date: "Jun 8, 2026", impressions: "6527", clicks: "241", ctr: "3.69%", ecpm: "$66.38", revenue: "$21.54" },
        { date: "Jun 7, 2026", impressions: "6486", clicks: "239", ctr: "3.69%", ecpm: "$65.21", revenue: "$21.26" },
        { date: "Jun 6, 2026", impressions: "6428", clicks: "236", ctr: "3.67%", ecpm: "$63.75", revenue: "$21.03" },
        { date: "Jun 5, 2026", impressions: "6379", clicks: "234", ctr: "3.67%", ecpm: "$62.18", revenue: "$20.79" },
        { date: "Jun 4, 2026", impressions: "6324", clicks: "231", ctr: "3.65%", ecpm: "$60.82", revenue: "$20.57" },
        { date: "Jun 3, 2026", impressions: "6278", clicks: "229", ctr: "3.65%", ecpm: "$59.16", revenue: "$20.38" },
        { date: "Jun 2, 2026", impressions: "6225", clicks: "226", ctr: "3.63%", ecpm: "$57.84", revenue: "$20.21" },
        { date: "Jun 1, 2026", impressions: "6182", clicks: "224", ctr: "3.62%", ecpm: "$56.22", revenue: "$19.99" },
      ],
      Desktop: [
        { date: "Jun 9, 2026", impressions: "4595", clicks: "170", ctr: "3.70%", ecpm: "$67.43", revenue: "$15.38" },
        { date: "Jun 8, 2026", impressions: "4569", clicks: "169", ctr: "3.70%", ecpm: "$66.38", revenue: "$15.08" },
        { date: "Jun 7, 2026", impressions: "4540", clicks: "167", ctr: "3.68%", ecpm: "$65.21", revenue: "$14.88" },
        { date: "Jun 6, 2026", impressions: "4500", clicks: "165", ctr: "3.67%", ecpm: "$63.75", revenue: "$14.72" },
        { date: "Jun 5, 2026", impressions: "4465", clicks: "163", ctr: "3.65%", ecpm: "$62.18", revenue: "$14.55" },
        { date: "Jun 4, 2026", impressions: "4427", clicks: "161", ctr: "3.64%", ecpm: "$60.82", revenue: "$14.40" },
        { date: "Jun 3, 2026", impressions: "4395", clicks: "160", ctr: "3.64%", ecpm: "$59.16", revenue: "$14.27" },
        { date: "Jun 2, 2026", impressions: "4358", clicks: "158", ctr: "3.63%", ecpm: "$57.84", revenue: "$14.14" },
        { date: "Jun 1, 2026", impressions: "4327", clicks: "156", ctr: "3.61%", ecpm: "$56.22", revenue: "$13.99" },
      ],
      Mobile: [
        { date: "Jun 9, 2026", impressions: "1969", clicks: "73", ctr: "3.71%", ecpm: "$67.43", revenue: "$6.60" },
        { date: "Jun 8, 2026", impressions: "1958", clicks: "72", ctr: "3.68%", ecpm: "$66.38", revenue: "$6.46" },
        { date: "Jun 7, 2026", impressions: "1946", clicks: "72", ctr: "3.70%", ecpm: "$65.21", revenue: "$6.38" },
        { date: "Jun 6, 2026", impressions: "1928", clicks: "71", ctr: "3.68%", ecpm: "$63.75", revenue: "$6.31" },
        { date: "Jun 5, 2026", impressions: "1914", clicks: "71", ctr: "3.71%", ecpm: "$62.18", revenue: "$6.24" },
        { date: "Jun 4, 2026", impressions: "1897", clicks: "70", ctr: "3.69%", ecpm: "$60.82", revenue: "$6.17" },
        { date: "Jun 3, 2026", impressions: "1883", clicks: "69", ctr: "3.66%", ecpm: "$59.16", revenue: "$6.11" },
        { date: "Jun 2, 2026", impressions: "1867", clicks: "68", ctr: "3.64%", ecpm: "$57.84", revenue: "$6.07" },
        { date: "Jun 1, 2026", impressions: "1855", clicks: "68", ctr: "3.66%", ecpm: "$56.22", revenue: "$6.00" },
      ],
    },
  },
  "This Year": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 9, 2026", impressions: "6564", clicks: "243", ctr: "3.70%", ecpm: "$67.43", revenue: "$21.98" },
        { date: "Jun 8, 2026", impressions: "6527", clicks: "241", ctr: "3.69%", ecpm: "$66.38", revenue: "$21.54" },
        { date: "Jun 7, 2026", impressions: "6486", clicks: "239", ctr: "3.69%", ecpm: "$65.21", revenue: "$21.26" },
        { date: "Jun 6, 2026", impressions: "6428", clicks: "236", ctr: "3.67%", ecpm: "$63.75", revenue: "$21.03" },
        { date: "Jun 5, 2026", impressions: "6379", clicks: "234", ctr: "3.67%", ecpm: "$62.18", revenue: "$20.79" },
        { date: "Jun 4, 2026", impressions: "6324", clicks: "231", ctr: "3.65%", ecpm: "$60.82", revenue: "$20.57" },
        { date: "Jun 3, 2026", impressions: "6278", clicks: "229", ctr: "3.65%", ecpm: "$59.16", revenue: "$20.38" },
        { date: "Jun 2, 2026", impressions: "6225", clicks: "226", ctr: "3.63%", ecpm: "$57.84", revenue: "$20.21" },
        { date: "Jun 1, 2026", impressions: "6182", clicks: "224", ctr: "3.62%", ecpm: "$56.22", revenue: "$19.99" },
      ],
      Desktop: [
        { date: "Jun 9, 2026", impressions: "4595", clicks: "170", ctr: "3.70%", ecpm: "$67.43", revenue: "$15.38" },
        { date: "Jun 8, 2026", impressions: "4569", clicks: "169", ctr: "3.70%", ecpm: "$66.38", revenue: "$15.08" },
        { date: "Jun 7, 2026", impressions: "4540", clicks: "167", ctr: "3.68%", ecpm: "$65.21", revenue: "$14.88" },
        { date: "Jun 6, 2026", impressions: "4500", clicks: "165", ctr: "3.67%", ecpm: "$63.75", revenue: "$14.72" },
        { date: "Jun 5, 2026", impressions: "4465", clicks: "163", ctr: "3.65%", ecpm: "$62.18", revenue: "$14.55" },
        { date: "Jun 4, 2026", impressions: "4427", clicks: "161", ctr: "3.64%", ecpm: "$60.82", revenue: "$14.40" },
        { date: "Jun 3, 2026", impressions: "4395", clicks: "160", ctr: "3.64%", ecpm: "$59.16", revenue: "$14.27" },
        { date: "Jun 2, 2026", impressions: "4358", clicks: "158", ctr: "3.63%", ecpm: "$57.84", revenue: "$14.14" },
        { date: "Jun 1, 2026", impressions: "4327", clicks: "156", ctr: "3.61%", ecpm: "$56.22", revenue: "$13.99" },
      ],
      Mobile: [
        { date: "Jun 9, 2026", impressions: "1969", clicks: "73", ctr: "3.71%", ecpm: "$67.43", revenue: "$6.60" },
        { date: "Jun 8, 2026", impressions: "1958", clicks: "72", ctr: "3.68%", ecpm: "$66.38", revenue: "$6.46" },
        { date: "Jun 7, 2026", impressions: "1946", clicks: "72", ctr: "3.70%", ecpm: "$65.21", revenue: "$6.38" },
        { date: "Jun 6, 2026", impressions: "1928", clicks: "71", ctr: "3.68%", ecpm: "$63.75", revenue: "$6.31" },
        { date: "Jun 5, 2026", impressions: "1914", clicks: "71", ctr: "3.71%", ecpm: "$62.18", revenue: "$6.24" },
        { date: "Jun 4, 2026", impressions: "1897", clicks: "70", ctr: "3.69%", ecpm: "$60.82", revenue: "$6.17" },
        { date: "Jun 3, 2026", impressions: "1883", clicks: "69", ctr: "3.66%", ecpm: "$59.16", revenue: "$6.11" },
        { date: "Jun 2, 2026", impressions: "1867", clicks: "68", ctr: "3.64%", ecpm: "$57.84", revenue: "$6.07" },
        { date: "Jun 1, 2026", impressions: "1855", clicks: "68", ctr: "3.66%", ecpm: "$56.22", revenue: "$6.00" },
      ],
    },
  },
}


const statisticsTotals = {
  impressions: 10,
  clicks: 1,
  revenue: 0.003,
  ecpm: 3.0,
  ctr: 10.0,
}

export function ReportContent() {
  const [showReport] = useState(true)
  const [selectedDateRange, setSelectedDateRange] = useState("Last 7 Days")
  const [selectedGroupBy, setSelectedGroupBy] = useState("Day")
  const [selectedMetrics, setSelectedMetrics] = useState("All Metrics")
  const [selectedSite, setSelectedSite] = useState("All Sites")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedDevice, setSelectedDevice] = useState("All Devices")
  const [currentReportData, setCurrentReportData] = useState(reportData["Last 7 Days"]["All Countries"]["All Devices"])
  const [isFiltered, setIsFiltered] = useState(false)

  const handleGenerateReport = () => {
    // Data already rendered, no action needed
  }

  const handleRefresh = () => {
    // Data already current, no action needed
  }

  const handleApplyFilters = () => {
    const dateData = reportData[selectedDateRange as keyof typeof reportData]
    const countryData = dateData?.[selectedCountry as keyof typeof dateData]
    const deviceData = countryData?.[selectedDevice as keyof typeof countryData]

    if (deviceData) {
      setCurrentReportData(deviceData)
      setIsFiltered(true)
    } else {
      setCurrentReportData(reportData["Last 7 Days"]["All Countries"]["All Devices"])
      setIsFiltered(false)
    }
  }

  const handleReset = () => {
    setSelectedDateRange("Last 7 Days")
    setSelectedGroupBy("Day")
    setSelectedMetrics("All Metrics")
    setSelectedSite("All Sites")
    setSelectedCountry("All Countries")
    setSelectedDevice("All Devices")

    setCurrentReportData(reportData["Last 7 Days"]["All Countries"]["All Devices"])
    setIsFiltered(false)
  }

  const calculateTotals = () => {
    if (currentReportData.length === 0) {
      return {
        totalRevenue: statisticsTotals.revenue.toFixed(3),
        totalImpressions: statisticsTotals.impressions.toLocaleString(),
        totalClicks: statisticsTotals.clicks.toLocaleString(),
        avgCTR: `${statisticsTotals.ctr.toFixed(2)}%`,
        avgECPM: `$${statisticsTotals.ecpm.toFixed(2)}`,
      }
    }

    const totalRevenue = currentReportData.reduce((sum, row) => {
      const revenue = Number.parseFloat(row.revenue.replace("$", "").replace(",", ""))
      return sum + revenue
    }, 0)

    const totalImpressions = currentReportData.reduce((sum, row) => {
      const impressions = Number.parseInt(row.impressions.replace(",", ""))
      return sum + impressions
    }, 0)

    const totalClicks = currentReportData.reduce((sum, row) => {
      const clicks = Number.parseInt(row.clicks.replace(",", ""))
      return sum + clicks
    }, 0)

    const avgCTR = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0.00"
    const avgECPM = totalImpressions > 0 ? ((totalRevenue / totalImpressions) * 1000).toFixed(2) : "0.00"

    return {
      totalRevenue: totalRevenue.toFixed(3),
      totalImpressions: totalImpressions.toLocaleString(),
      totalClicks: totalClicks.toLocaleString(),
      avgCTR: `${avgCTR}%`,
      avgECPM: `$${avgECPM}`,
    }
  }

  const totals = calculateTotals()

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent" onClick={handleRefresh}>
                  <RefreshCw size={16} className="mr-2" />
                  Refresh
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh report data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export report as CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Filter size={18} className="mr-2" />
          <h3 className="font-medium">Report Filters</h3>
          {isFiltered && (
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Filters Applied</span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Date Range</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Group By</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedGroupBy}
              onChange={(e) => setSelectedGroupBy(e.target.value)}
            >
              <option>Hour</option>
              <option>Day</option>
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Metrics</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedMetrics}
              onChange={(e) => setSelectedMetrics(e.target.value)}
            >
              <option>All Metrics</option>
              <option>Revenue Only</option>
              <option>Traffic Only</option>
              <option>Performance Only</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Sites</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}
            >
              <option>https://soulcnt.com</option>
              <option>All Sites</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Countries</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>All Countries</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Device</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
            >
              <option>All Devices</option>
              <option>Desktop</option>
              <option>Mobile</option>
              <option>Tablet</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <Button className="bg-green-500 hover:bg-green-600 flex-1" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
            <Button variant="outline" onClick={handleReset} className="bg-transparent">
              Reset
            </Button>
          </div>
        </div>

        {/* Filter Summary */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            <strong>Current Filters:</strong> {selectedDateRange} • {selectedGroupBy} • {selectedSite} •{" "}
            {selectedCountry} • {selectedDevice} • {selectedMetrics}
          </div>
        </div>
      </Card>

      {/* Statistics Summary - Always visible */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalRevenue}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Impressions</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalImpressions}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Clicks</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalClicks}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average CTR</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgCTR}</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average eCPM</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgECPM}</div>
        </div>
      </div>

      {/* Report Table */}
      {showReport && (
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Report Results</h3>
            <div className="text-sm text-gray-500">
              Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Impressions</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Clicks</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">CTR</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">eCPM</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {currentReportData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center">
                      <div className="text-gray-400">
                        <BarChart2 className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm font-medium">No records available</p>
                        <p className="text-xs mt-1">Reports will be visible after data is added</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentReportData.map((row, index) => (
                    <ReportRow
                      key={index}
                      date={row.date}
                      impressions={row.impressions}
                      clicks={row.clicks}
                      ctr={row.ctr}
                      ecpm={row.ecpm}
                      revenue={row.revenue}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  )
}

interface ReportRowProps {
  date: string
  impressions: string
  clicks: string
  ctr: string
  ecpm: string
  revenue: string
}

function ReportRow({ date, impressions, clicks, ctr, ecpm, revenue }: ReportRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4 text-sm">{date}</td>
      <td className="py-3 px-4 text-sm">{impressions}</td>
      <td className="py-3 px-4 text-sm">{clicks}</td>
      <td className="py-3 px-4 text-sm">{ctr}</td>
      <td className="py-3 px-4 text-sm">{ecpm}</td>
      <td className="py-3 px-4 text-sm font-medium">{revenue}</td>
    </tr>
  )
}
