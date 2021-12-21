class RiittController < ApplicationController
  def index
    @works = [
      Work::Nanairo,
      Work::Dokyoji,
      Work::Yuka
    ]
  end
  def contact
    @contact = Contact.new
    form_items
    error_array(@form_items, @contact)
  end

  def works
    @works = [
      Work::Nanairo_visit,
      Work::Parti,
      Work::Piani,
      Work::Dokyoji,
      Work::Yuka
    ]
  end
  def web
    @works = [
      Work::Nanairo,
      Work::Parti,
      Work::Piani,
      Work::Dokyoji
    ]
  end
  def media
    @works = [
      Work::Yuka
    ]
  end

  def contact_send
    @contact = Contact.new(contact_params)
    if @contact.valid? && verify_recaptcha
      redirect_to contact_path, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact).deliver_now
      ContactMailer.contact_mail_auto_reserve(@contact).deliver_now
    else
      flash.now[:alert] = '入力内容に誤りがあります。ご確認ください。'
      @contact = Contact.new
      form_items
      render :contact
    end
  end

  def form_items
    @form_items = {
      url: contact_send_path,
      forms: @contact,
      items: [
        {
          title: '会社名',
          mandatory: false,
          key: :company_name,
          id: 'company_name',
          maxlength: '20',
          placeholder: '例) Riitt株式会社',
          error_message: ''
        },
        {
          title: 'お名前',
          mandatory: true,
          key: :name,
          id: 'name',
          maxlength: '20',
          placeholder: '例) リット　太郎',
          error_message: ''
        },
        {
          title: '電話番号',
          mandatory: false,
          key: :tel,
          id: 'tel',
          maxlength: '12',
          placeholder: '例) 000-0000-000',
          error_message: ''
        },
        {
          title: 'メールアドレス',
          mandatory: true,
          key: :email,
          id: 'email',
          email_field: true,
          placeholder: '例) example@riitt.net',
          error_message: ''
        },
        {
          title: 'メールアドレス確認',
          mandatory: true,
          key: :email_confirmation,
          id: 'email_cofirmation',
          email_field: true,
          placeholder: '例) example@riitt.net',
          error_message: ''
        },
        {
          title: 'お問い合わせ内容',
          key: :question,
          id: 'question',
          text_area: true,
          maxlength: '1000',
          rows: '4',
          error_message: ''
        }
      ]
    }
    
  end
  private
  def error_array(array, error_params)
    array[:items].each do |item|
      item[:error_message] = error_params.errors.full_messages_for(item[:key])
    end
  end
  def contact_params
    params.require(:contact).permit(:company_name, :name, :tel, :email, :email_confirmation, :question)
  end
end
