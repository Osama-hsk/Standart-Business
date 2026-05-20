// Services configuration
// Contains all service catalog data and service-related settings

export const servicesConfig = {
  // Max number of services shown on homepage section.
  // Full /services page still lists all enabled services.
  showOnHomeCount: 5,
  services: [
    {
      slug: "service-consultation",
      enabled: true,
      image: { src: "/globe.svg", alt: "Consultation and request service" },
      copy: {
        en: {
          title: "Service Consultation",
          short: "Understand the job, discuss the issue, and get a clear recommendation for the next step.",
          longTitle: "Service Consultation and Request Review",
          paragraphs: [
            "Start with a simple consultation that helps the client explain the need clearly and understand the next step.",
            "This service page is designed to show enough detail for trust without turning the site into a heavy content project.",
            "The goal is to make contact easy while still giving the client a clearer picture of the service process."
          ]
        }
      }
    },
    {
      slug: "on-site-service",
      enabled: true,
      image: { src: "/file.svg", alt: "On-site service" },
      copy: {
        en: {
          title: "On-Site Service",
          short: "Get the hands-on service visit needed to inspect, repair, install, or complete the work properly.",
          longTitle: "On-Site Local Service Delivery",
          paragraphs: [
            "Use this section to explain the main local service itself in clear, practical language.",
            "The customer should quickly understand what is offered, what kind of job this covers, and how to request it.",
            "This keeps the sales path clear while supporting a fuller service website structure."
          ]
        }
      }
    },
    {
      slug: "follow-up-support",
      enabled: true,
      image: { src: "/window.svg", alt: "Support and follow-up service" },
      copy: {
        en: {
          title: "Follow-Up Support",
          short: "Receive clear follow-up communication so you know what happens next after the first visit or request.",
          longTitle: "Follow-Up Support and Customer Communication",
          paragraphs: [
            "A complete service website should also explain what happens after the first contact or visit.",
            "This helps the client trust the process without needing advanced systems or long sales copy.",
            "Use it to explain follow-up, availability, or simple after-service support."
          ]
        }
      }
    },
    {
      slug: "scheduled-appointments",
      enabled: true,
      image: { src: "/next.svg", alt: "Scheduled service appointments" },
      copy: {
        en: {
          title: "Scheduled Appointments",
          short: "Request a preferred date and time for the service and get a clear confirmation of the next step.",
          longTitle: "Scheduled Service Appointments",
          paragraphs: [
            "This package supports a simple request or booking flow without becoming a full calendar system.",
            "Clients can choose a preferred date and time and send the request through the existing API bookings route.",
            "That gives the business a practical booking step while keeping the implementation lightweight."
          ]
        }
      }
    },
    {
      slug: "service-area-coverage",
      enabled: true,
      image: { src: "/globe.svg", alt: "Service area coverage" },
      copy: {
        en: {
          title: "Service Area Coverage",
          short: "Check whether your address is covered and understand where the business provides local service.",
          longTitle: "Service Area Coverage and Local Reach",
          paragraphs: [
            "Local service businesses often lose clarity when coverage areas are not explained properly.",
            "This service page helps show where the business operates and what kind of local reach it supports.",
            "It works well alongside the map or service-area section on the homepage."
          ]
        }
      }
    },
    {
      slug: "maintenance-support",
      enabled: true,
      image: { src: "/file.svg", alt: "Maintenance support service" },
      copy: {
        en: {
          title: "Maintenance Support",
          short: "Arrange recurring visits or planned support to keep the service reliable over time.",
          longTitle: "Maintenance Support and Ongoing Service Care",
          paragraphs: [
            "This service explains how the business supports repeat work, planned visits, or recurring local service needs.",
            "It helps the customer understand that the relationship does not end after one appointment.",
            "Use it to explain recurring care, follow-up scheduling, or maintenance support."
          ]
        }
      }
    },
    {
      slug: "emergency-callouts",
      enabled: false,
      image: { src: "/window.svg", alt: "Emergency local service" },
      copy: {
        en: {
          title: "Emergency Callouts",
          short: "Fast-response support for urgent local service situations",
          longTitle: "Emergency Callouts and Fast Local Response",
          paragraphs: [
            "Use this page to show how urgent requests are handled and what kind of fast response the business can offer.",
            "A premium service website benefits from clearly separating urgent support from planned visits.",
            "This helps the customer self-select the right path and reduces confusion before they make contact."
          ]
        }
      }
    },
    {
      slug: "installations-setup",
      enabled: false,
      image: { src: "/globe.svg", alt: "Installations and setup service" },
      copy: {
        en: {
          title: "Installations & Setup",
          short: "Planned installation work with clear preparation and next-step guidance",
          longTitle: "Installations, Setup, and Project Preparation",
          paragraphs: [
            "This service page is useful when the business offers new installations, setup work, or project-based service visits.",
            "It helps the client understand preparation needs, timing, and the expected flow of the work.",
            "That makes the premium package feel more complete and more useful for real client decision-making."
          ]
        }
      }
    },
    {
      slug: "inspections-assessment",
      enabled: false,
      image: { src: "/next.svg", alt: "Inspection and assessment service" },
      copy: {
        en: {
          title: "Inspections & Assessment",
          short: "Initial checks, service assessments, and practical recommendations",
          longTitle: "Inspections, Assessment, and Service Recommendations",
          paragraphs: [
            "Use this page to explain inspection visits, first assessments, or diagnostic-style service appointments.",
            "It gives the customer a clearer idea of what happens before a larger job is approved or scheduled.",
            "This is especially useful in premium packages where service detail pages need to feel informative and trustworthy."
          ]
        }
      }
    },
    {
      slug: "customer-care-support",
      enabled: false,
      image: { src: "/file.svg", alt: "Customer care support service" },
      copy: {
        en: {
          title: "Customer Care Support",
          short: "Direct communication, follow-up answers, and service guidance",
          longTitle: "Customer Care Support and Ongoing Communication",
          paragraphs: [
            "A premium local service site should show that communication continues beyond the first visit or request.",
            "This page supports that message by explaining how the business handles questions, follow-up, and service guidance.",
            "It strengthens trust and gives the service website a more complete client journey."
          ]
        }
      }
    }
  ]
} as const;
