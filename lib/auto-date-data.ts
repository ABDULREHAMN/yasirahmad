/**
 * Automatic Date Data Generator
 * Generates missing dates with zero values while preserving historical data
 */

export interface DailyMetric {
  date: string
  impressions: number
  clicks: number
  revenue: number
  ctr: string
  ecpm: string
}

export interface DailyMetricString {
  date: string
  impressions: string
  clicks: string
  revenue: string
  ctr: string
  ecpm: string
}

const ZERO_METRIC = {
  impressions: 0,
  clicks: 0,
  revenue: 0.00,
  ctr: "0.00%",
  ecpm: "0.00",
}

const ZERO_METRIC_STRING = {
  impressions: "0",
  clicks: "0",
  revenue: "$0.00",
  ctr: "0.00%",
  ecpm: "$0.00",
}

/**
 * Format date as "MMM D, YYYY"
 */
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

/**
 * Parse date string "MMM D, YYYY" to Date object
 */
function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

/**
 * Get today's date in "MMM D, YYYY" format
 */
export function getTodayDateString(): string {
  return formatDate(new Date())
}

/**
 * Fill gaps in historical data with zero values
 * Keeps all existing data and adds missing dates up to today
 */
export function fillDataWithMissingDates(
  historicalData: DailyMetric[],
  upToDate?: Date
): DailyMetric[] {
  if (historicalData.length === 0) {
    return historicalData
  }

  const endDate = upToDate ? new Date(upToDate) : new Date()
  const startDate = parseDate(historicalData[0].date)

  // Create a map of existing dates
  const existingDates = new Map(
    historicalData.map((item) => [
      parseDate(item.date).toDateString(),
      item,
    ])
  )

  // Generate all dates from start to today
  const result: DailyMetric[] = []
  const current = new Date(startDate)

  while (current <= endDate) {
    const dateStr = formatDate(current)
    const dateKey = current.toDateString()

    if (existingDates.has(dateKey)) {
      result.push(existingDates.get(dateKey)!)
    } else {
      result.push({
        date: dateStr,
        ...ZERO_METRIC,
      })
    }

    current.setDate(current.getDate() + 1)
  }

  return result
}

/**
 * Fill gaps in historical data with zero values (string format for reports)
 * Keeps all existing data and adds missing dates up to today
 */
export function fillDataWithMissingDatesString(
  historicalData: DailyMetricString[],
  upToDate?: Date
): DailyMetricString[] {
  if (historicalData.length === 0) {
    return historicalData
  }

  const endDate = upToDate ? new Date(upToDate) : new Date()
  const startDate = parseDate(historicalData[0].date)

  // Create a map of existing dates
  const existingDates = new Map(
    historicalData.map((item) => [
      parseDate(item.date).toDateString(),
      item,
    ])
  )

  // Generate all dates from start to today
  const result: DailyMetricString[] = []
  const current = new Date(startDate)

  while (current <= endDate) {
    const dateStr = formatDate(current)
    const dateKey = current.toDateString()

    if (existingDates.has(dateKey)) {
      result.push(existingDates.get(dateKey)!)
    } else {
      result.push({
        date: dateStr,
        ...ZERO_METRIC_STRING,
      })
    }

    current.setDate(current.getDate() + 1)
  }

  return result
}

/**
 * Get today's metrics from data array
 */
export function getTodayMetrics(data: DailyMetric[]): DailyMetric | null {
  const today = formatDate(new Date())
  return data.find((item) => item.date === today) || null
}

/**
 * Get last N days of data (descending order - most recent first)
 */
export function getLastNDays(data: DailyMetric[], n: number): DailyMetric[] {
  return data.slice(-n).reverse()
}

/**
 * Get last N days of data for string format (descending order - most recent first)
 */
export function getLastNDaysString(
  data: DailyMetricString[],
  n: number
): DailyMetricString[] {
  return data.slice(-n).reverse()
}
