import styles from './styles.module.scss'
import { useSession, signIn } from 'next-auth/client'

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()

  function handleSubscibe() {
    if (!session) {
      signIn('github')
      return;
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscibe}
    >
      Subscribe now
    </button>
  )
}