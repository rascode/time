import {format, daysToWeeks,startOfDay, endOfDay, startOfToday, startOfWeek, endOfWeek,endOfMonth, startOfMonth, startOfQuarter,endOfQuarter, startOfYear, endOfYear, getDaysInMonth, getWeeksInMonth, getDaysInYear, formatDistanceStrict, getISOWeeksInYear } from 'date-fns'
// get the last day of the month passed into the function




////////////////////////////////////////// ⚡ VARS ⚡ ////////////////////////////////////////////
const day = new Date()
const date = {}

date.today=format(new Date(), 'PPPPpppp')
/////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////// ⚡ TODAY ⚡  ///////////////////////////////////////////
date.today_date=startOfToday()
date.today_date_time=new Date(day)

//------------------------------------------ Dates ---------------------------------------// 

date.today_date_formatted=format(new Date(), 'PPPP')
date.today_date_time_formatted=format(new Date(), 'PPPPpppp')

//------------------------------------------ Countdown ---------------------------------------// 

date.countdown_to_new_year_months = null
date.countdown_to_new_year_weeks = null
date.countdown_to_new_year_days = null
date.countdown_to_new_year_hours = null
date.countdown_to_new_year_minutes = null
date.countdown_to_new_year_seconds = null

/////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////// ⚡ YEAR 📅 ⚡  ///////////////////////////////////////////
//CURRENT YEAR
//------------------------------------------ F I G U R E S ---------------------------------------// 
date.current_year_number_formatted                = format(new Date(day), 'yyyy') // '2021' 
date.current_year_day_number_formatted            = format(new Date(day), 'dd') // '1'
date.current_year_week_number_formateed           = format(new Date(day), 'wo') // '1st'
date.current_year_month_number_formatted          = format(new Date(day), 'MMMM') // 'January'
date.current_year_quarter_number_formatted        = format(new Date(day), 'QQQ') // 'QQQ' = 'Q1' , 'QQQQ' = '1st Quarter 

//------------------------------------------ D A T E S  ---------------------------------------// 
date.current_year_date_start            = startOfYear(day)
date.current_year_date_end              = endOfYear(day)

//------------------------------------------ C O U N T S ------------------------------------------//
date.current_year_days_total_count      = getDaysInYear(day)
date.current_year_weeks_total_count     = null
date.current_year_months_total_count    = null
date.current_year_quarters_total_count  = null
date.current_year_days_passed_count     = null
date.current_year_days_left_end_count   = null
date.current_year_weeks_past_end_count  = null
date.current_year_days_left_end_count   = null

//------------------------------------------ D A Y S ------------------------------------------//
date.current_year_days_past             = formatDistanceStrict( new Date(day),new Date(date.current_year_date_start),{ unit: 'day'}) //days
date.current_year_days_left             = formatDistanceStrict( new Date(day),new Date(date.current_year_date_end),{ unit: 'day'})
date.current_year_weeks_past            = formatDistanceStrict( new Date(day),new Date(date.current_year_date_start),{ unit: 'day'}) //weeks
date.current_year_weeks_left            = formatDistanceStrict( new Date(day),new Date(date.current_year_date_end),{ unit: 'day'})
date.current_year_months_past           = formatDistanceStrict( new Date(day),new Date(date.current_year_date_start),{ unit: 'month'}) //months
date.current_year_months_left           = formatDistanceStrict( new Date(day),new Date(date.current_year_date_end),{ unit: 'month'})

//NEXT YEAR
//------------------------------------------ D A T E S  ---------------------------------------// 
date.next_year_date_start        = new Date('2023') //todo end of current year + 1 day using date diff forumula

//------------------------------------------ D A Y S  ---------------------------------------// 
date.next_year_days_until           = formatDistanceStrict( new Date(day),new Date(date.next_year_date_start),{ unit: 'day'}) //days
date.next_year_weeks_until          = formatDistanceStrict( new Date(day),new Date(date.next_year_date_start),{ unit: 'day'}) //weeks
date.next_year_months_until         = formatDistanceStrict( new Date(day),new Date(date.next_year_date_start),{ unit: 'month'}) //months
/////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////// ⚡ QUARTERS ⌚ ⚡ ////////////////////////////////////////
//------------------------------------------ D A T E S  ---------------------------------------// 
date.current_quarter_date_start     = startOfQuarter(day) // start & end
date.current_quarter_date_end       = endOfQuarter(day)

//------------------------------------------ C O U N T S ------------------------------------------//
date.current_quarters_days_total_count  = 120   // todo: calc function  - number of days = start of quarter - end of quarter
date.current_quarter_days_past_count    = 24    // todo: calc function  - start of quarter - today
date.current_quarter_days_left_count    = 96    // todo: calc function  - today - end of quarter
date.current_quarter_weeks_past_count   = daysToWeeks(date.current_quarter_days_past_count)
date.current_quarter_weeks_left_count   = daysToWeeks(date.current_quarter_days_left_count)

//------------------------------------------ D A Y S ------------------------------------------//
date.current_quarter_days_past      = formatDistanceStrict( new Date(day),new Date(date.current_quarter_date_start),{ unit: 'day'}) //days
date.current_quarter_days_left      = formatDistanceStrict( new Date(day),new Date(date.current_quarter_date_end),{ unit: 'day'})



//------------------------------------------ Next Quarter  ----------------------------------------//
date.next_quarter_date_start        = null // start + end
date.next_quarter_date_end          = null

date.next_quarter_days_until        = null //days
date.next_quarter_weeks_until       = null //weeks
date.next_quarter_months_until      = null //months
/////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////// ⚡ MONTHS ⌚ ⚡ //////////////////////////////////////////
//------------------------------------------ Current Month ---------------------------------------//

date.current_month_days_total_count      = getDaysInMonth(day)
date.current_month_days_passed_count     = null
date.current_month_days_left_end_count   = null
date.current_month_weeks_past_end_count  = null
date.current_month_days_left_end_count   = null

date.current_month_date_start       = startOfMonth(day) // start + end
date.current_month_date_end         = endOfMonth(day)
date.current_month_count_days       = getDaysInMonth(day) 
date.current_month_count_weeks      = getWeeksInMonth(day) 

date.current_month_days_past        = formatDistanceStrict( new Date(day),new Date(date.current_month_date_start),{ unit: 'day'})
date.current_month_days_left        = formatDistanceStrict( new Date(day),new Date(date.current_month_date_end),{ unit: 'day'})
date.current_month_weeks_past       = formatDistanceStrict( new Date(day),new Date(date.current_month_date_start),{ unit: 'day'})
date.current_month_weeks_left       = formatDistanceStrict( new Date(day),new Date(date.current_month_date_end),{ unit: 'day'})
/////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////// ⚡ WEEKS ⚡ /////////////////////////////////////////////
//------------------------------------------ Current Weeks ---------------------------------------//
date.current_week_date_start        = startOfWeek(day)
date.current_week_date_end          = endOfWeek(day)

date.current_week_days_past         = formatDistanceStrict( new Date(day),new Date(date.current_week_date_start),{ unit: 'day'})
date.current_week_days_left         = formatDistanceStrict( new Date(day),new Date(date.current_week_date_end),{ unit: 'day'})

//------------------------------------------ Next Week ------------------------------------------//
date.next_week_days_past            = null // todo: create forumla 
date.next_week_days_left            = null // todo: create forumla 
/////////////////////////////////////////////////////////////////////////////////////////////////

console.log(date)