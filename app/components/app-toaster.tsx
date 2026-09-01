import { Toaster } from "sonner";

function SuccessIcon() {
  return (
    <span aria-hidden="true" className="promo-toast__icon promo-toast__icon--success">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="m6.75 12.25 3.35 3.35 7.15-7.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ErrorIcon() {
  return (
    <span aria-hidden="true" className="promo-toast__icon promo-toast__icon--error">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 7.5v5.25M12 16.5v.01"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function AppToaster() {
  return (
    <Toaster
      className="promo-toaster"
      position="top-center"
      duration={2400}
      gap={8}
      visibleToasts={2}
      offset={{ top: "calc(env(safe-area-inset-top) + 18px)" }}
      mobileOffset={{
        top: "calc(env(safe-area-inset-top) + 14px)",
        right: "14px",
        left: "14px",
      }}
      swipeDirections={["top", "right", "left"]}
      icons={{
        success: <SuccessIcon />,
        error: <ErrorIcon />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "promo-toast",
          content: "promo-toast__content",
          title: "promo-toast__title",
          description: "promo-toast__description",
          icon: "promo-toast__icon-slot",
        },
      }}
      containerAriaLabel="Promo code notifications"
    />
  );
}
