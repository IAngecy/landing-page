export function getAppUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL || "#";
}

export function getHelpUrl(): string {
  return process.env.NEXT_PUBLIC_HELP_URL || "#";
}

export function getTryUrl(): string {
  return process.env.NEXT_PUBLIC_TRY_URL || "#";
}
