"use client";

import { useSyncExternalStore } from "react";
import {
  defaultCampaign,
  restoreCampaign,
  type Campaign,
} from "@/lib/property-demo";

const STORAGE_KEY = "deepia-property-tour-v1";
let snapshot = defaultCampaign;
let initialized = false;
const listeners = new Set<() => void>();
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function getSnapshot() {
  if (!initialized) {
    initialized = true;
    try {
      snapshot = restoreCampaign(window.sessionStorage.getItem(STORAGE_KEY));
    } catch {
      /* Keep the demo usable when browser storage is unavailable. */
    }
  }
  return snapshot;
}
const getServerSnapshot = () => defaultCampaign;

export function saveCampaign(next: Campaign) {
  snapshot = next;
  initialized = true;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* In-memory navigation still works without persistence. */
  }
  listeners.forEach((listener) => listener());
}

export function useCampaign() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
