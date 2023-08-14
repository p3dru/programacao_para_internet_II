from django.db import models

# Create your models here.
class Produto(models.Model):
    STATUS_CHOICES = ['disponivel', 'Disponível', 'indisponível', 'Indisponível']
    
    nome = models.CharField(max_length=32)
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default='disponível')
    destinacao = models.CharField(max_length=180)
    rentabilidade = models.IntegerField()
    prazo = models.IntegerField()
    administracao = models.IntegerField()

    def __str__(self):
        return self.name

