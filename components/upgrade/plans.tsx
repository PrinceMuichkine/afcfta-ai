import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { WithTooltip } from "@/components/ui/with-tooltip"
import { IconX, IconSparkles } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { PlanFeature } from "@/components/upgrade/plan-picker"
import { useContext, useState } from "react"
import { ChatbotUIContext } from "@/context/context"
import { supabase } from "@/lib/supabase/browser-client"
import { createCheckoutSession } from "@/actions/stripe"
import { router } from "next/client"

const BYOK_PLAN_PREFIX = "byok"
const PRO_PLAN_PREFIX = "pro"
const BILLING_CYCLE_YEARLY = "yearly"
const BILLING_CYCLE_MONTHLY = "monthly"

type BILLING_CYCLE = typeof BILLING_CYCLE_YEARLY | typeof BILLING_CYCLE_MONTHLY
