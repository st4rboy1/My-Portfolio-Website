"use client"

import * as React from "react"
import { DayPicker, getDefaultClassNames, type DayButton, type Locale } from "react-day-picker"
import type { DayProps, Modifiers } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        caption_dropdowns: "flex justify-center gap-1",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          buttonVariant === "outline" ? "border" : "border-0"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md [&:has([aria-selected].day-range-middle)]:rounded-none [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          buttonVariant === "outline" ? "border" : "border-0"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "rounded-md bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      components={{
        PreviousMonthButton: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        NextMonthButton: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        Day: ({ day, modifiers, className, ...restProps }) => {
          // Destructure a comprehensive list of known React event handlers
          // and other non-event handler props that might be problematic or need explicit handling.
          const {
            onAbort, onAnimationEnd, onAnimationIteration, onAnimationStart,
            onAuxClick, onCanPlay, onCanPlayThrough, onChange, onClick: originalOnClick, onContextMenu,
            onCopy, onCopyCapture, onCut, onCutCapture, onDoubleClick, onDrag, onDragEnd, onDragEnter,
            onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onDurationChange, onEmptied,
            onEncrypted, onEnded, onError, onFocus: originalOnFocus, onGotPointerCapture, onInput, onInvalid,
            onKeyDown: originalOnKeyDown, onKeyPress, onKeyUp: originalOnKeyUp, onLoad, onLoadStart, onLoadedData, onLoadedMetadata,
            onLostPointerCapture, onMouseDown: originalOnMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,
            onMouseOver, onMouseUp: originalOnMouseUp, onPaste, onPasteCapture, onPause, onPlay, onPlaying, onPointerCancel,
            onPointerDown, onPointerEnter, onPointerLeave, onPointerMove, onPointerOut, onPointerOver,
            onPointerUp, onProgress, onRateChange, onReset, onScroll, onSeeked, onSeeking, onSelect,
            onStalled, onSubmit, onSuspend, onTimeUpdate, onTouchCancel, onTouchEnd, onTouchMove,
            onTouchStart, onTransitionEnd, onVolumeChange, onWaiting, onWheel,
            onCompositionEnd, onCompositionStart, onCompositionUpdate, onCompositionEndCapture,
            onCompositionStartCapture, onCompositionUpdateCapture,
            ...otherHtmlAttributes // Remaining generic HTML attributes
          } = restProps;

          // Re-assemble essential button props with type assertions
          const buttonSpecificProps = {
            ...otherHtmlAttributes, // Pass generic HTML attributes
            onClick: originalOnClick as React.MouseEventHandler<HTMLButtonElement> | undefined,
            onFocus: originalOnFocus as React.FocusEventHandler<HTMLButtonElement> | undefined,
            onBlur: restProps.onBlur as React.FocusEventHandler<HTMLButtonElement> | undefined, // Re-add onBlur if it was filtered
            onMouseDown: originalOnMouseDown as React.MouseEventHandler<HTMLButtonElement> | undefined,
            onMouseUp: originalOnMouseUp as React.MouseEventHandler<HTMLButtonElement> | undefined,
            onKeyDown: originalOnKeyDown as React.KeyboardEventHandler<HTMLButtonElement> | undefined,
            onKeyUp: originalOnKeyUp as React.KeyboardEventHandler<HTMLButtonElement> | undefined,
          } as React.ButtonHTMLAttributes<HTMLButtonElement>;

          return (
            <CalendarDayButton
              locale={locale}
              day={day}
              modifiers={modifiers}
              className={className}
              {...buttonSpecificProps}
            />
          );
        },
        ...components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

interface CalendarDayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  day: DayProps['day'];
  modifiers: Modifiers;
  locale?: Partial<Locale>;
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: CalendarDayButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      className={cn(
        "relative",
        "data-[range-end=true]:rounded-e-[--cell-radius]",
        "data-[range-start=true]:rounded-s-[--cell-radius]",
        className
      )}
      {...props}
    />
  )
}

export { Calendar }
