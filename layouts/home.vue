<template>
<div>
  <slot/>
  <custom-footer :languages="languages" :menus="menus" />
</div>
</template>

<script setup>
  import CustomFooter from '@/components/CustomFooter'

  useMeta({
    title: 'facebook - Tailwind',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Projeto visa demoonstrar a aplicação do Tailwind a home do facebook'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
      },
    ],
  })

  let languages = [
    {
      title: 'Português (Brasil)',
      link: '#',
      active: true,
    },
    {
      title: 'English (US)',
      link: '#',
    },
    {
      title: 'Español',
      link: '#',
    },
    {
      title: 'Français (France)',
      link: '#',
    },
    {
      title: 'Italiano',
      link: '#',
    },
    {
      title: 'Deutsch',
      link: '#',
    },
    {
      title: 'العربية',
      link: '#',
    },
    {
      title: 'हिन्दी',
      link: '#',
    },
    {
      title: '中文(简体)',
      link: '#',
    },
    {
      title: '日本語',
      link: '#',
    },
  ]

  let menus = [
    {
      title: 'Cadastre-se',
      link: '#',
    },
    {
      title: 'Entrar',
      link: '#',
    },
    {
      title: 'Messeger',
      link: '#',
    },
    {
      title: 'Facebook Lite',
      link: '#',
    },
    {
      title: 'Watch',
      link: '#',
    },
    {
      title: 'Locais',
      link: '#',
    },
    {
      title: 'Jogos',
      link: '#',
    },
    {
      title: 'Marketplace',
      link: '#',
    },
    {
      title: 'Facebook Pay',
      link: '#',
    },
    {
      title: 'Oculus',
      link: '#',
    },
    {
      title: 'Portal',
      link: '#',
    },
    {
      title: 'Instagram',
      link: '#',
    },
    {
      title: 'Boletim',
      link: '#',
    },
    {
      title: 'Local',
      link: '#',
    },
    {
      title: 'Campanhas de arrecadação de fundos',
      link: '#',
    },
    {
      title: 'Serviços',
      link: '#',
    },
    {
      title: 'Central de Informação de Votação',
      link: '#',
    },
    {
      title: 'Grups',
      link: '#',
    },
    {
      title: 'Criar anúncio',
      link: '#',
    },
    {
      title: 'Criar Página',
      link: '#',
    },
    {
      title: 'Desenvolvedores',
      link: '#',
    },
    {
      title: 'Carreiras',
      link: '#',
    },
    {
      title: 'Privacidade',
      link: '#',
    },
    {
      title: 'Cookies',
      link: '#',
    },
    {
      title: 'Escolhas para anúncios',
      link: '#',
    },
    {
      title: 'Termos',
      link: '#',
    },
    {
      title: 'Ajuda',
      link: '#',
    },
  ]
</script>