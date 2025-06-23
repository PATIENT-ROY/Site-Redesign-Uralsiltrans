import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index > 0 && <ChevronRight className="h-5 w-5 text-gray-400" />}
              <a
                href={item.href}
                className={`ml-2 text-sm ${
                  index === items.length - 1
                    ? "font-medium text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
