import EmailAlerts from '@/components/EmailAlerts';

export default function EmailAlertsPage() {
    return (
        <main className="min-h-screen pt-20">
            <EmailAlerts isModal={false} />
        </main>
    );
}
