import type { FC, ReactNode } from "react";
import { useRef, useState } from "react";
import { Bell01, Settings01 } from "@untitledui/icons";
import { ChevronDown } from "@untitledui/icons";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { DropdownMenuSimple } from "@/components/marketing/header-navigation/dropdown-header-navigation";
import { cx } from "@/utils/cx";
import { NavItemButton } from "@/components/application/app-navigation/base-components/nav-item-button";
import { DialogTrigger } from "@/components/application/modals/modal";
import { Avatar } from "@/components/base/avatar/avatar";
import { NavAccountCard, NavAccountMenu } from "@/components/application/app-navigation/base-components/nav-account-card";
import { Link } from "react-router-dom";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
    { label: "Home", href: "/", },
    { label: "Claims", href: "/claims", menu: <DropdownMenuSimple /> },
    { label: "Cases", href: "/cases", menu: <DropdownMenuSimple /> },
    { label: "Calendar", href: "/calendar" },
    { label: "Tasks", href: "/tasks" },
];

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <Link to={props.href} className="flex items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover">
                    {props.label}
                </Link>
            </li>
        );
    }

    return (
        <li className="flex flex-col gap-0.5">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover"
            >
                {props.label}{" "}
                <ChevronDown
                    className={cx("size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear", isOpen ? "-rotate-180" : "rotate-0")}
                />
            </button>
            {isOpen && <div>{props.children}</div>}
        </li>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    /** List of sub-items to display. */
    subItems?: NavItem[];
    /** Content to display in the trailing position. */
    trailingContent?: ReactNode;
    /** Whether to show the avatar dropdown. */
    showAvatarDropdown?: boolean;
    /** Whether to hide the bottom border. */
    hideBorder?: boolean;
}

type NavItem = {
    /** Label text for the nav item. */
    label: string;
    /** URL to navigate to when the nav item is clicked. */
    href: string;
    /** Whether the nav item is currently active. */
    current?: boolean;
    /** Icon component to display. */
    icon?: FC<{ className?: string }>;
    /** Badge to display. */
    badge?: ReactNode;
    /** List of sub-items to display. */
    items?: NavItem[];
};


export const Header = ({ items = headerNavItems, isFullWidth, isFloating, className, activeUrl, trailingContent, showAvatarDropdown = true, }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header
            ref={headerRef}
            className={cx(
                "relative flex h-18 w-full items-center justify-center md:h-20",
                isFloating && "h-16 md:h-19 md:pt-3",
                isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div
                    className={cx(
                        "flex w-full justify-between gap-4",
                        isFloating && "ring-secondary_alt md:rounded-2xl md:bg-primary md:py-3 md:pr-3 md:pl-4 md:shadow-xs md:ring-1",
                    )}
                >
                    <div className="flex flex-1 items-center gap-5">
                        <UntitledLogo className="h-8 md:max-lg:hidden" />
                        <UntitledLogoMinimal className="hidden h-8 md:inline-block lg:hidden" />

                        {/* Desktop navigation */}
                        <nav className="max-md:hidden">
                            <ul className="flex items-center gap-0.5">
                                {items.map((navItem) => (
                                    <li key={navItem.label}>
                                        {navItem.menu ? (
                                            <AriaDialogTrigger>
                                                <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                                    <span className="px-0.5">{navItem.label}</span>

                                                    <ChevronDown className="size-4 rotate-0 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                                                </AriaButton>

                                                <AriaPopover
                                                    className={({ isEntering, isExiting }) =>
                                                        cx(
                                                            "hidden origin-top will-change-transform md:block",
                                                            isFullWidth && "w-full",
                                                            isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1",
                                                            isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1",
                                                        )
                                                    }
                                                    offset={isFloating || isFullWidth ? 0 : 8}
                                                    containerPadding={0}
                                                    triggerRef={(isFloating && isFullWidth) || isFullWidth ? headerRef : undefined}
                                                >
                                                    {({ isEntering, isExiting }) => (
                                                        <AriaDialog
                                                            className={cx(
                                                                "mx-auto origin-top outline-hidden",
                                                                isFloating && "max-w-7xl px-8 pt-3",
                                                                // Have to use the scale animation inside the popover to avoid
                                                                // miscalculating the popover's position when opening.
                                                                isEntering && !isFullWidth && "duration-200 ease-out animate-in zoom-in-95",
                                                                isExiting && !isFullWidth && "duration-150 ease-in animate-out zoom-out-95",
                                                            )}
                                                        >
                                                            {navItem.menu}
                                                        </AriaDialog>
                                                    )}
                                                </AriaPopover>
                                            </AriaDialogTrigger>
                                        ) : (
                                            <Link
                                                to={navItem.href || '/'}
                                                className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus:outline-offset-2 focus-visible:outline-2"
                                            >
                                                <span className="px-0.5">{navItem.label}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                        <div className="flex items-center gap-3 max-md:hidden">
                            {trailingContent}

                            <div className="flex gap-0.5">
                                <NavItemButton
                                    current={activeUrl === "/settings-01"}
                                    size="md"
                                    icon={Settings01}
                                    label="Settings"
                                    href="/settings-01"
                                    tooltipPlacement="bottom"
                                />
                                <NavItemButton
                                    current={activeUrl === "/notifications-01"}
                                    size="md"
                                    icon={Bell01}
                                    label="Notifications"
                                    href="/notifications-01"
                                    tooltipPlacement="bottom"
                                />
                            </div>

                            {showAvatarDropdown && (
                                <DialogTrigger>
                                    <AriaButton
                                        className={({ isPressed, isFocused }) =>
                                            cx(
                                                "group relative inline-flex cursor-pointer",
                                                (isPressed || isFocused) && "rounded-full outline-2 outline-offset-2 outline-focus-ring",
                                            )
                                        }
                                    >
                                        <Avatar alt="Olivia Rhye" src="https://www.untitledui.com/images/avatars/olivia-rhye?bg=%23E0E0E0" size="md" />
                                    </AriaButton>
                                    <AriaPopover
                                        placement="bottom right"
                                        offset={8}
                                        className={({ isEntering, isExiting }) =>
                                            cx(
                                                "will-change-transform",
                                                isEntering &&
                                                    "duration-300 ease-out animate-in fade-in placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2",
                                                isExiting &&
                                                    "duration-150 ease-in animate-out fade-out placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2",
                                            )
                                        }
                                    >
                                        <NavAccountMenu />
                                    </AriaPopover>
                                </DialogTrigger>
                            )}
                        </div>

                    {/* Mobile menu and menu trigger */}
                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label="Toggle navigation menu"
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group ml-auto cursor-pointer rounded-lg p-2 md:hidden",
                                    isHovered && "bg-primary_hover",
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    className="hidden text-secondary group-aria-expanded:block"
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="text-secondary group-aria-expanded:hidden"
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </AriaButton>
                        <AriaPopover
                            triggerRef={headerRef}
                            className="h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden"
                            offset={0}
                            crossOffset={20}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="outline-hidden">
                                <nav className="w-full bg-primary shadow-lg">
                                    <ul className="flex flex-col gap-0.5 py-5">
                                        {items.map((navItem) =>
                                            navItem.menu ? (
                                                <MobileNavItem key={navItem.label} label={navItem.label}>
                                                    {navItem.menu}
                                                </MobileNavItem>
                                            ) : (
                                                <MobileNavItem key={navItem.label} label={navItem.label} href={navItem.href} />
                                            ),
                                        )}
                                    </ul>
                                    <div className="p-2">
                                        <NavAccountCard />
                                    </div>
                                </nav>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};
