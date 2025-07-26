import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.prayerResponse.deleteMany()
  await prisma.prayerRequest.deleteMany()
  await prisma.forumComment.deleteMany()
  await prisma.forumPost.deleteMany()
  await prisma.forum.deleteMany()
  await prisma.groupMember.deleteMany()
  await prisma.group.deleteMany()
  await prisma.notification.deleteMany()
  await prisma.report.deleteMany()
  await prisma.user.deleteMany()

  // Hash passwords
  const hashedPassword = await bcryptjs.hash('demo123', 10)

  // Create users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@comunidadeviva.com',
      name: 'Administrador',
      ministry: 'Liderança',
      role: 'ADMIN',
      phone: '(11) 99999-0001',
      bio: 'Administrador da plataforma Comunidade Viva'
    }
  })

  const pastor = await prisma.user.create({
    data: {
      email: 'pastor@comunidadeviva.com',
      name: 'Pastor João Silva',
      ministry: 'Pastoral',
      role: 'LEADER',
      phone: '(11) 99999-0002',
      bio: 'Pastor responsável pela igreja'
    }
  })

  const members = await Promise.all([
    prisma.user.create({
      data: {
        email: 'maria@email.com',
        name: 'Maria Santos',
        ministry: 'Louvor e Adoração',
        role: 'MEMBER',
        phone: '(11) 99999-0003',
        bio: 'Cantora no ministério de louvor'
      }
    }),
    prisma.user.create({
      data: {
        email: 'pedro@email.com',
        name: 'Pedro Oliveira',
        ministry: 'Jovens',
        role: 'MEMBER',
        phone: '(11) 99999-0004',
        bio: 'Líder do ministério de jovens'
      }
    }),
    prisma.user.create({
      data: {
        email: 'ana@email.com',
        name: 'Ana Costa',
        ministry: 'Infantil',
        role: 'MEMBER',
        phone: '(11) 99999-0005',
        bio: 'Professora da escola dominical infantil'
      }
    }),
    prisma.user.create({
      data: {
        email: 'carlos@email.com',
        name: 'Carlos Ferreira',
        ministry: 'Diaconia',
        role: 'MEMBER',
        phone: '(11) 99999-0006',
        bio: 'Diácono responsável pela assistência social'
      }
    })
  ])

  // Create forums
  const forums = await Promise.all([
    prisma.forum.create({
      data: {
        name: 'Estudos Bíblicos',
        description: 'Discussões sobre passagens bíblicas e estudos teológicos',
        icon: '📖'
      }
    }),
    prisma.forum.create({
      data: {
        name: 'Dúvidas sobre Fé',
        description: 'Espaço para esclarecimentos e crescimento espiritual',
        icon: '❓'
      }
    }),
    prisma.forum.create({
      data: {
        name: 'Testemunhos',
        description: 'Compartilhe seus testemunhos e experiências com Deus',
        icon: '✨'
      }
    }),
    prisma.forum.create({
      data: {
        name: 'Vida Cristã',
        description: 'Discussões sobre o dia a dia da vida cristã',
        icon: '🙏'
      }
    })
  ])

  // Create groups
  const groups = await Promise.all([
    prisma.group.create({
      data: {
        name: 'Jovens Unidos',
        description: 'Grupo para jovens de 18 a 30 anos, focado em crescimento espiritual e comunhão',
        ownerId: members[1].id, // Pedro
        maxMembers: 50
      }
    }),
    prisma.group.create({
      data: {
        name: 'Mães em Oração',
        description: 'Grupo de mães que se reúnem para orar pelos filhos e pela família',
        ownerId: members[2].id, // Ana
        maxMembers: 30
      }
    }),
    prisma.group.create({
      data: {
        name: 'Casais na Fé',
        description: 'Grupo para casais cristãos focado no fortalecimento do matrimônio',
        ownerId: pastor.id,
        maxMembers: 20
      }
    }),
    prisma.group.create({
      data: {
        name: 'Intercessores',
        description: 'Grupo dedicado à intercessão e oração pela igreja e comunidade',
        ownerId: members[0].id, // Maria
        maxMembers: 25
      }
    })
  ])

  // Add group members
  await Promise.all([
    // Jovens Unidos
    prisma.groupMember.create({
      data: {
        userId: members[1].id, // Pedro (owner)
        groupId: groups[0].id,
        role: 'ADMIN'
      }
    }),
    prisma.groupMember.create({
      data: {
        userId: members[2].id, // Ana
        groupId: groups[0].id,
        role: 'MEMBER'
      }
    }),
    // Mães em Oração
    prisma.groupMember.create({
      data: {
        userId: members[2].id, // Ana (owner)
        groupId: groups[1].id,
        role: 'ADMIN'
      }
    }),
    prisma.groupMember.create({
      data: {
        userId: members[0].id, // Maria
        groupId: groups[1].id,
        role: 'MEMBER'
      }
    })
  ])

  // Create prayer requests
  const prayerRequests = await Promise.all([
    prisma.prayerRequest.create({
      data: {
        title: 'Oração pela minha família',
        content: 'Peço orações para que minha família encontre paz e união neste momento difícil. Estamos passando por algumas dificuldades financeiras e precisamos da direção de Deus.',
        category: 'FAMILY',
        userId: members[0].id, // Maria
        isUrgent: false
      }
    }),
    prisma.prayerRequest.create({
      data: {
        title: 'Recuperação de cirurgia',
        content: 'Meu pai passou por uma cirurgia cardíaca ontem e estamos orando por uma recuperação rápida e completa. Ele tem 68 anos e precisa muito das orações da igreja.',
        category: 'HEALTH',
        userId: members[1].id, // Pedro
        isUrgent: true
      }
    }),
    prisma.prayerRequest.create({
      data: {
        title: 'Oportunidade de emprego',
        content: 'Estou desempregado há 3 meses e preciso de oração para encontrar uma nova oportunidade de trabalho. Tenho família para sustentar e confio na provisão de Deus.',
        category: 'WORK',
        userId: members[3].id, // Carlos
        isUrgent: false
      }
    }),
    prisma.prayerRequest.create({
      data: {
        title: 'Crescimento espiritual',
        content: 'Peço orações para que eu possa crescer mais em minha vida com Deus, ter mais disciplina na leitura bíblica e na oração diária.',
        category: 'SPIRITUAL',
        userId: members[2].id, // Ana
        isUrgent: false
      }
    })
  ])

  // Create prayer responses
  await Promise.all([
    prisma.prayerResponse.create({
      data: {
        type: 'PRAYING',
        comment: 'Orando por sua família! Deus tem o controle de todas as coisas.',
        userId: pastor.id,
        prayerRequestId: prayerRequests[0].id
      }
    }),
    prisma.prayerResponse.create({
      data: {
        type: 'PRAYING',
        comment: 'Estou orando pela recuperação do seu pai. Deus é fiel!',
        userId: members[0].id, // Maria
        prayerRequestId: prayerRequests[1].id
      }
    }),
    prisma.prayerResponse.create({
      data: {
        type: 'HEART',
        userId: members[2].id, // Ana
        prayerRequestId: prayerRequests[1].id
      }
    }),
    prisma.prayerResponse.create({
      data: {
        type: 'PRAYING',
        comment: 'Confiando que Deus abrirá as portas certas para você!',
        userId: members[1].id, // Pedro
        prayerRequestId: prayerRequests[2].id
      }
    })
  ])

  // Create forum posts
  const forumPosts = await Promise.all([
    prisma.forumPost.create({
      data: {
        title: 'Estudo sobre Salmo 23',
        content: 'Gostaria de compartilhar algumas reflexões sobre o Salmo 23. Como vocês interpretam o versículo "O Senhor é o meu pastor, nada me faltará"?',
        userId: pastor.id,
        forumId: forums[0].id,
        isPinned: true
      }
    }),
    prisma.forumPost.create({
      data: {
        title: 'Como manter a fé em tempos difíceis?',
        content: 'Estou passando por um momento muito difícil e às vezes sinto que minha fé está abalada. Como vocês mantêm a confiança em Deus durante as provações?',
        userId: members[0].id, // Maria
        forumId: forums[1].id
      }
    }),
    prisma.forumPost.create({
      data: {
        title: 'Testemunho de cura',
        content: 'Quero compartilhar o testemunho da cura da minha irmã. Ela estava com câncer e hoje os médicos disseram que não há mais nenhum sinal da doença. Deus é fiel!',
        userId: members[3].id, // Carlos
        forumId: forums[2].id
      }
    })
  ])

  // Create forum comments
  await Promise.all([
    prisma.forumComment.create({
      data: {
        content: 'Excelente reflexão, pastor! O Salmo 23 sempre me traz paz e conforto.',
        userId: members[0].id, // Maria
        forumPostId: forumPosts[0].id
      }
    }),
    prisma.forumComment.create({
      data: {
        content: 'Oro para que você encontre força na Palavra de Deus. Hebreus 11:1 diz que a fé é a certeza de coisas que se esperam.',
        userId: pastor.id,
        forumPostId: forumPosts[1].id
      }
    }),
    prisma.forumComment.create({
      data: {
        content: 'Que testemunho maravilhoso! Glória a Deus pela vida da sua irmã!',
        userId: members[1].id, // Pedro
        forumPostId: forumPosts[2].id
      }
    })
  ])

  // Create notifications
  await Promise.all([
    prisma.notification.create({
      data: {
        title: 'Novo pedido de oração',
        content: 'Maria Santos compartilhou um novo pedido de oração',
        type: 'PRAYER_REQUEST',
        userId: pastor.id
      }
    }),
    prisma.notification.create({
      data: {
        title: 'Comentário no fórum',
        content: 'Você recebeu um novo comentário no seu post sobre Salmo 23',
        type: 'FORUM_COMMENT',
        userId: pastor.id
      }
    }),
    prisma.notification.create({
      data: {
        title: 'Novo membro no grupo',
        content: 'Ana Costa entrou no grupo Jovens Unidos',
        type: 'GROUP_UPDATE',
        userId: members[1].id // Pedro (owner do grupo)
      }
    })
  ])

  console.log('✅ Database seeded successfully!')
  console.log(`👥 Created ${await prisma.user.count()} users`)
  console.log(`🏛️ Created ${await prisma.forum.count()} forums`)
  console.log(`👫 Created ${await prisma.group.count()} groups`)
  console.log(`🙏 Created ${await prisma.prayerRequest.count()} prayer requests`)
  console.log(`💬 Created ${await prisma.forumPost.count()} forum posts`)
  console.log(`📱 Created ${await prisma.notification.count()} notifications`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })