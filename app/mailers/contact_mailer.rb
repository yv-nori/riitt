class ContactMailer < ApplicationMailer
  def contact_mail(contact)
    @contact = contact
    mail to: 'riitt.public@gmail.com',
        subject: 'お問い合わせ内容'
  end
  def contact_mail_auto_reserve(contact)
    @contact = contact
    mail to: @contact.email,
        subject: '(自動返信)お問い合わせ内容のご確認'
  end
end
