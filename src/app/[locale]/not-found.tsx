import { Link } from "@/i18n/routing";
import Button from "@/components/ui/Button";
import { Icon } from "@/components/ui/IconSvg";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-premium-dark">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-6">
          <Icon name="sprout" size={36} className="text-premium-green" />
        </div>
        <h1 className="font-heading text-4xl text-white mb-4">
          Page non trouvée
        </h1>
        <p className="text-premium-text mb-8">
          La page que vous recherchez n&apos;existe pas.
        </p>
        <Link href="/">
          <Button variant="primary">Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  );
}
