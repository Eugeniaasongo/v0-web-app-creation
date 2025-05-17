import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">CivicJustice</h3>
            <p className="text-sm text-muted-foreground">
              Empowering citizens in Ghana with accessible civil legal support.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/report-issue" className="text-sm text-muted-foreground hover:text-foreground">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link href="/lawyers" className="text-sm text-muted-foreground hover:text-foreground">
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link href="/constitution" className="text-sm text-muted-foreground hover:text-foreground">
                  Constitution
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="text-sm text-muted-foreground hover:text-foreground">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@civicjustice.org</li>
              <li className="text-sm text-muted-foreground">Phone: +233 XX XXX XXXX</li>
              <li className="text-sm text-muted-foreground">Address: Accra, Ghana</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CivicJustice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
