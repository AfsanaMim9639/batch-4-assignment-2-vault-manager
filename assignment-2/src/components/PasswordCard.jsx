import React, { useState } from "react";

const PasswordCard = ({ service }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isCssColor = (val) =>
    typeof val === "string" && /^(#|rgb|hsl)/i.test(val.trim());

  const bgIsCss = isCssColor(service.bgColor);
  const textIsCss = isCssColor(service.textColor);

  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          {bgIsCss || textIsCss ? (
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 text-sm font-semibold uppercase"
              style={{
                backgroundColor: bgIsCss ? service.bgColor : undefined,
                color: textIsCss ? service.textColor : undefined,
              }}
            >
              {service.initials}
            </div>
          ) : (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 text-sm font-semibold uppercase ${service.bgColor || ""} ${service.textColor || ""}`}
            >
              {service.initials}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {service.category}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-400">{service.url}</p>

      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">
            Username
          </dt>
          <dd className="text-neutral-50">{service.username}</dd>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">
            Password
          </dt>
          <dd className="flex items-center gap-2 text-neutral-50">
            <span>{showPassword ? service.password : "••••••••"}</span>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-xs font-semibold text-blue-400"
            >
              {showPassword ? "Hide" : "Reveal"}
            </button>
          </dd>
        </div>
      </dl>
    </article>
  );
};

export default PasswordCard;
