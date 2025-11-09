import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  // Sample embed config from Power BI Playground
  const embedConfig = {
    type: "report",
    id: "5b218778-e7a5-4d73-8187-f10824047715",
    embedUrl: "https://playground.powerbi.com/sampleReportEmbed",
    accessToken: "H4sIAAAAAAAEACWWxw7jRhJF_6UWtiSaPLYXAtRRs7AtWSN4MdsZNJvNYIsZ_v0wCFv3AYV6Ca5-evnp5efny-fXb8D7j-fvP7_-_PLt-fX5-Wv4-PLy9fPT9y_fv79-_vL6_fXL8-uvL7_-9vmbl9en5-fXH19-fP369fvLf319-vz8_fX5-ev3l99-fvn2_cuPb1---_jp9evzl---PX99-frty9cvv_78-vL8_fPzH9-en1_-_PL1n___l5efX37--vL-4_VfL_9-_fb99z8N",
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Power BI Reports</h1>
        <p className="text-muted-foreground mt-2">
          View and analyze business intelligence reports
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sample Financial Report</CardTitle>
          <CardDescription>
            Interactive Power BI dashboard with financial metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[600px] border rounded-md overflow-hidden">
            <PowerBIEmbed
              embedConfig={embedConfig}
              cssClassName="h-full w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Report Information</CardTitle>
          <CardDescription>
            Details about the embedded Power BI report
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Interactive data visualizations</li>
              <li>Real-time data filtering and analysis</li>
              <li>Cross-report navigation</li>
              <li>Export capabilities</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              This is a sample report from Power BI Playground. In production, replace with your own report ID, embed URL, and access token.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
