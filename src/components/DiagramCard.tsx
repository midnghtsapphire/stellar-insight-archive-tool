
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DiagramCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  codeOrNotes?: string;
  className?: string;
}

const DiagramCard: React.FC<DiagramCardProps> = ({ title, imageUrl, imageAlt, description, codeOrNotes, className }) => {
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <img src={imageUrl} alt={imageAlt} className="rounded-md mb-4 w-full h-auto aspect-video object-cover" />
        {codeOrNotes && (
          <div>
            <h4 className="font-semibold text-sm mb-1">Code/Notes:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md text-xs overflow-x-auto">
              <code>{codeOrNotes}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DiagramCard;
