import { Body, Button, Container, Head, Heading, Html, Text } from 'react-email';
import { type APP_LOCALES } from 'twenty-shared/translations';

type SendInviteLinkEmailProps = {
  link: string;
  workspace: { name: string | undefined; logo: string | undefined };
  sender: { email: string; firstName: string; lastName: string };
  serverUrl: string;
  locale: keyof typeof APP_LOCALES;
};

export const SendInviteLinkEmail = ({ link, workspace, locale }: SendInviteLinkEmailProps) => (
  <Html lang={locale}>
    <Head />
    <Body style={{ margin: 0, padding: '32px 16px', backgroundColor: '#f6f5ff', fontFamily: 'Arial, sans-serif', color: '#262334' }}>
      <Container style={{ maxWidth: '560px', margin: '0 auto', padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px' }}>
        <Text style={{ fontWeight: 'bold', color: '#7266F3', fontSize: '18px' }}>Всем шары</Text>
        <Heading as="h1" style={{ fontSize: '24px', lineHeight: '1.3' }}>Приглашение в команду «Всем шары»</Heading>
        <Text>Вас приглашают в рабочее пространство «{workspace.name ?? 'Всем шары'}» — CRM для аэродизайнеров.</Text>
        <Text>Войдите, чтобы работать с заказами, клиентами и сообщениями.</Text>
        <Button href={link} style={{ padding: '13px 22px', backgroundColor: '#7266F3', color: '#ffffff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Принять приглашение</Button>
        <Text style={{ fontSize: '12px', color: '#777777' }}>Если вы не ожидали это приглашение, просто проигнорируйте письмо.</Text>
      </Container>
    </Body>
  </Html>
);

SendInviteLinkEmail.PreviewProps = {
  link: 'https://crm.vsemshary.ru/invite/preview',
  workspace: { name: 'Всем шары', logo: undefined },
  sender: { email: 'noreply@vsemshary.ru', firstName: 'Антон', lastName: '' },
  serverUrl: 'https://crm.vsemshary.ru',
  locale: 'ru-RU',
} as SendInviteLinkEmailProps;

export default SendInviteLinkEmail;
