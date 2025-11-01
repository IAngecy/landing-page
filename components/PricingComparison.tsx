"use client";

import { ComparisonFeature, comparison } from "@/data/pricing";

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-[#5B8CFF]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PartialIcon() {
  return (
    <svg
      className="h-5 w-5 text-[#5B8CFF]/60"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-6-6h12" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      className="h-5 w-5 text-foreground/20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
}

function FeatureCell({ value }: { value: boolean | "parcial" | undefined }) {
  if (value === true) {
    return (
      <td className="px-2 sm:px-4 py-4">
        <div className="flex items-center justify-center">
          <CheckIcon />
        </div>
      </td>
    );
  }
  if (value === "parcial") {
    return (
      <td className="px-2 sm:px-4 py-4">
        <div className="flex items-center justify-center">
          <PartialIcon />
        </div>
      </td>
    );
  }
  return (
    <td className="px-2 sm:px-4 py-4">
      <div className="flex items-center justify-center">
        <DashIcon />
      </div>
    </td>
  );
}

export default function PricingComparison() {
  return (
    <section className="py-12 sm:py-16 bg-background mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Comparativo de Recursos
          </h2>
          <p className="mt-3 text-foreground/70">Veja o que está incluído em cada plano</p>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle px-4 sm:px-0">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="px-3 sm:px-4 py-4 text-left font-semibold text-foreground text-sm sm:text-base">
                    Recurso
                  </th>
                  <th className="px-2 sm:px-4 py-4 text-center font-semibold text-foreground text-xs sm:text-sm">
                    Testar de graça
                  </th>
                  <th className="px-2 sm:px-4 py-4 text-center font-semibold text-foreground text-xs sm:text-sm">
                    Freela
                  </th>
                  <th className="px-2 sm:px-4 py-4 text-center font-semibold text-foreground text-xs sm:text-sm">
                    Starter
                  </th>
                  <th className="px-2 sm:px-4 py-4 text-center font-semibold text-foreground text-xs sm:text-sm">
                    Pro
                  </th>
                  <th className="px-2 sm:px-4 py-4 text-center font-semibold text-foreground text-xs sm:text-sm">
                    Agency
                  </th>
                  <th className="px-2 sm:px-4 py-4 text-center font-semibold text-foreground text-xs sm:text-sm">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {comparison.map((item: ComparisonFeature, index) => (
                  <tr key={index} className="hover:bg-foreground/5 transition-colors">
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-foreground/80">
                      {item.feature}
                    </td>
                    <FeatureCell value={item.free} />
                    <FeatureCell value={item.freela} />
                    <FeatureCell value={item.starter} />
                    <FeatureCell value={item.pro} />
                    <FeatureCell value={item.agency} />
                    <FeatureCell value={item.enterprise} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-xs text-foreground/60 text-center">
          <p>• Indica que o recurso está parcialmente disponível ou com limitações</p>
        </div>
      </div>
    </section>
  );
}
