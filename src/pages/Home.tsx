import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, ShieldCheck } from "lucide-react";

export default function Home() {
  const { user, users } = useAuth();
  
  const stats = [
    {
      title: "Total Users",
      value: users.length,
      description: "Registered in system",
      icon: Users,
    },
    {
      title: "Your Role",
      value: user?.role || "N/A",
      description: "Current access level",
      icon: ShieldCheck,
    },
    {
      title: "Reports",
      value: "1",
      description: "Available reports",
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}!</h1>
        <p className="text-muted-foreground mt-2">
          Here's an overview of your dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold capitalize">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Quick guide to using this dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">For Admins:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Manage users from the Users page</li>
              <li>Add, edit, or delete user accounts</li>
              <li>View Power BI reports</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">For Viewers:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Access Power BI reports</li>
              <li>View dashboard statistics</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
